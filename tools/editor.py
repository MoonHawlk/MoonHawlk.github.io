#!/usr/bin/env python3
"""Local editor for the posts in content/writing/.

Run:  python3 tools/editor.py

Opens tools/editor.html in the browser, served from this machine only.
Saving writes content/writing/<date>-<slug>.md and runs tools/build.py,
so the post page and the home page list are ready to commit.
Standard library only.
"""
import contextlib
import io
import json
import re
import sys
import threading
import unicodedata
import webbrowser
from datetime import date
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build  # noqa: E402

HOST = "127.0.0.1"
PORT = 8790
POSTS_DIR = build.CONTENT / "writing"
FILE_NAME = re.compile(r"^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")


class EditorError(Exception):
    pass


def slugify(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def post_file(name):
    if not name or not FILE_NAME.match(name):
        raise EditorError(f"Invalid file name: {name!r}")
    return POSTS_DIR / name


def one_line(value):
    return " ".join(str(value or "").split())


def clean_post(data):
    title = one_line(data.get("title"))
    summary = one_line(data.get("summary"))
    day = one_line(data.get("date"))
    slug = slugify(data.get("slug") or title)
    if not title:
        raise EditorError("The title is empty.")
    if not summary:
        raise EditorError("The summary is empty.")
    if not slug:
        raise EditorError("The slug is empty.")
    try:
        date.fromisoformat(day)
    except ValueError:
        raise EditorError("The date must be YYYY-MM-DD.")
    body = str(data.get("body") or "").replace("\r\n", "\n").strip("\n")
    return {"title": title, "summary": summary, "date": day, "slug": slug, "draft": bool(data.get("draft")), "body": body}


def list_posts():
    posts = []
    for path in POSTS_DIR.glob("*.md"):
        post = build.read_post(path)
        posts.append({k: post[k] for k in ("slug", "title", "date", "summary", "draft")} | {"file": path.name})
    return sorted(posts, key=lambda p: (p["date"], p["file"]), reverse=True)


def load_post(name):
    path = post_file(name)
    if not path.exists():
        raise EditorError(f"{name} does not exist.")
    post = build.read_post(path)
    return post | {"file": name, "body": post["body"].strip("\n")}


def run_build():
    out = io.StringIO()
    with contextlib.redirect_stdout(out):
        build.main()
    return out.getvalue().strip()


def save_post(data):
    post = clean_post(data)
    name = f"{post['date']}-{post['slug']}.md"
    old = data.get("file")
    target = POSTS_DIR / name

    if name != old and target.exists():
        raise EditorError(f"{name} already exists. Change the slug or the date.")

    header = [f"title: {post['title']}", f"date: {post['date']}", f"summary: {post['summary']}"]
    if post["draft"]:
        header.append("draft: true")
    text = "---\n" + "\n".join(header) + "\n---\n\n" + post["body"] + "\n"

    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    target.write_text(text, encoding="utf-8", newline="\n")
    if old and old != name:
        post_file(old).unlink(missing_ok=True)

    return {"file": name, "slug": post["slug"], "draft": post["draft"], "log": run_build()}


def delete_post(data):
    post_file(data.get("file")).unlink(missing_ok=True)
    return {"log": run_build()}


def preview(data):
    post = clean_post(data | {"title": data.get("title") or "Untitled", "summary": data.get("summary") or "-", "date": data.get("date") or date.today().isoformat()})
    page = build.versioned(build.post_page(post))
    return {"html": page.replace("<head>", '<head>\n    <base href="/writing/preview/">', 1)}


ROUTES = {
    ("GET", "/api/posts"): lambda query, body: list_posts(),
    ("GET", "/api/post"): lambda query, body: load_post(query.get("file", [""])[0]),
    ("POST", "/api/save"): lambda query, body: save_post(body),
    ("POST", "/api/delete"): lambda query, body: delete_post(body),
    ("POST", "/api/preview"): lambda query, body: preview(body),
}


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(build.ROOT), **kwargs)

    def log_message(self, *args):
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if urlparse(self.path).path.startswith("/api/"):
            self.api("GET")
        else:
            super().do_GET()

    def do_POST(self):
        self.api("POST")

    def api(self, method):
        # Only this machine's own editor page may call the API: the Host check stops
        # DNS rebinding, and the custom header makes browsers block cross-site requests.
        host = (self.headers.get("Host") or "").split(":")[0]
        if host not in (HOST, "localhost") or self.headers.get("X-Editor") != "1":
            return self.reply(403, {"error": "Forbidden"})

        url = urlparse(self.path)
        route = ROUTES.get((method, url.path))
        if not route:
            return self.reply(404, {"error": "Not found"})
        try:
            length = int(self.headers.get("Content-Length") or 0)
            body = json.loads(self.rfile.read(length) or b"{}") if method == "POST" else {}
            self.reply(200, route(parse_qs(url.query), body))
        except EditorError as error:
            self.reply(400, {"error": str(error)})
        except SystemExit as error:
            self.reply(400, {"error": str(error)})
        except Exception as error:
            self.reply(500, {"error": f"{type(error).__name__}: {error}"})

    def reply(self, status, payload):
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    server = ThreadingHTTPServer((HOST, port), Handler)
    url = f"http://{HOST}:{port}/tools/editor.html"
    print(f"Writing editor running at {url}")
    print("Press Ctrl+C to stop.")
    threading.Timer(0.5, webbrowser.open, [url]).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
