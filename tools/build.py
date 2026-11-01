#!/usr/bin/env python3
"""Build the generated parts of the site.

Run from anywhere:  python3 tools/build.py

- content/projects.json -> projects/<slug>/index.html and projects/index.html
    "enabled": false removes the generated page and hides the project.
- content/writing/*.md  -> writing/<slug>/index.html and writing/posts.json
    Posts with "draft: true" are not published. The home page lists the
    published posts and hides the Writing section when there are none.
- Every page that links assets/css or assets/js gets ?v=<hash> on the link,
  so browsers fetch a new copy whenever the file changes.

Only pages carrying GENERATOR are ever removed, so hand-made folders are safe.
Standard library only.
"""
import hashlib
import html
import json
import re
from datetime import date, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
PROJECTS_DIR = ROOT / "projects"
WRITING_DIR = ROOT / "writing"
GENERATOR = '<meta name="generator" content="tools/build.py">'
FONTS = (
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400"
    "&family=Inter:wght@300;400;500&display=swap"
)
YEAR = date.today().year
SITE = json.loads((CONTENT / "site.json").read_text(encoding="utf-8"))
ASSET_LINK = re.compile(r"(assets/(?:css|js)/[\w.-]+\.(?:css|js))(?:\?v=\w+)?")
HAND_WRITTEN_PAGES = ["index.html", "404.html"]


def site(key):
    return re.sub(r"\{(\w+)\}", lambda m: str(YEAR) if m.group(1) == "year" else SITE.get(m.group(1), m.group(0)), SITE[key])


def esc(value):
    return html.escape(str(value), quote=True)


def fmt_date(iso):
    d = datetime.strptime(str(iso), "%Y-%m-%d")
    return f"{d.strftime('%B')} {d.day}, {d.year}"


def asset_version(rel):
    return hashlib.sha1((ROOT / rel).read_bytes()).hexdigest()[:8]


def versioned(html_text):
    return ASSET_LINK.sub(lambda m: f"{m.group(1)}?v={asset_version(m.group(1))}", html_text)


def is_generated(page):
    if not page.exists():
        return False
    text = page.read_text(encoding="utf-8")
    return GENERATOR in text


def remove_generated(page):
    page.unlink()
    try:
        page.parent.rmdir()
    except OSError:
        pass


def nav(root):
    return f"""    <nav class="nav" id="nav">
        <a href="{root}" class="nav-logo">{esc(SITE["initials"])}</a>
        <ul class="nav-links">
            <li><a href="{root}projects/">Projects</a></li>
            <li><a href="{root}#contact" class="nav-cta">Contact</a></li>
        </ul>
    </nav>"""


def head(title, description, root, css):
    styles = "".join(f'\n    <link rel="stylesheet" href="{root}assets/css/{name}">' for name in ["styles.css", *css])
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {GENERATOR}
    <title>{esc(title)} · {esc(SITE["name"])}</title>
    <meta name="description" content="{esc(description)}">
    <meta property="og:title" content="{esc(title)} · {esc(SITE["name"])}">
    <meta property="og:description" content="{esc(description)}">
    <meta property="og:image" content="{esc(SITE["url"])}/assets/img/og-image.png">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="{root}assets/img/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="{FONTS}" rel="stylesheet">{styles}
</head>
<body>
"""


def footer(back_href, back_label):
    return f"""    <footer>
        <div class="footer-inner">
            <p class="footer-copy">{esc(site("copyright"))}</p>
            <a href="{back_href}" class="footer-back">{back_label}</a>
        </div>
    </footer>
</body>
</html>
"""


def write_page(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(versioned(text), encoding="utf-8", newline="\n")


# ---------------------------------------------------------------- projects

def tags_html(tags):
    return "".join(f"<span>{esc(t)}</span>" for t in tags)


def project_page(p):
    actions = [
        f'<a href="{esc(p["repo"])}" target="_blank" rel="noopener" class="btn btn-primary">View on GitHub →</a>'
    ]
    if p.get("homepage"):
        actions.append(
            f'<a href="{esc(p["homepage"])}" target="_blank" rel="noopener" class="btn btn-secondary">Live demo ↗</a>'
        )

    meta = [("Language", p.get("language") or "Not specified"), ("Last update", fmt_date(p["updated"]))]
    meta_html = "".join(f"<div><dt>{esc(k)}</dt><dd>{esc(v)}</dd></div>" for k, v in meta)

    figure = ""
    if p.get("image"):
        figure = (
            f'\n                <figure class="project-figure">'
            f'<img src="{esc(p["image"])}" alt="{esc(p.get("image_alt", p["name"]))}" loading="lazy"></figure>'
        )

    return (
        head(p["name"], p["description"], "../../", ["projects.css"])
        + f"""{nav("../../")}
    <main>
        <section class="project-hero">
            <div class="section-inner">
                <span class="section-label">Project</span>
                <h1 class="section-title">{esc(p["name"])}</h1>
                <p class="project-lead">{esc(p["description"])}</p>
                <div class="project-tags">{tags_html(p["tags"])}</div>
                <dl class="project-meta">{meta_html}</dl>
                <div class="project-actions">{"".join(actions)}</div>{figure}
            </div>
        </section>
    </main>
"""
        + footer("../", "← All projects")
    )


FILTER_JS = r"""
    <script>
    (function () {
        const input = document.getElementById('project-search');
        const grid = document.getElementById('projects-grid');
        const cards = Array.from(grid.querySelectorAll('.project-card'));
        const chips = Array.from(document.querySelectorAll('.tag-filter'));
        const count = document.getElementById('project-count');
        const empty = document.getElementById('project-empty');
        const selected = new Set();

        // Every character of `token` appears in `text`, in order (e.g. "lmm" matches "llm").
        function isSubsequence(token, text) {
            let i = 0;
            for (const ch of text) {
                if (ch === token[i]) i++;
                if (i === token.length) return true;
            }
            return false;
        }

        // 2 = substring match, 1 = fuzzy match, 0 = no match.
        function scoreToken(token, text) {
            if (text.includes(token)) return 2;
            return isSubsequence(token, text) ? 1 : 0;
        }

        function update() {
            const tokens = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
            const matches = [];

            cards.forEach(card => {
                const tags = card.dataset.tags.toLowerCase().split('|');
                const hasTags = [...selected].every(tag => tags.includes(tag));
                let total = 0;
                for (const token of tokens) {
                    const s = scoreToken(token, card.dataset.search);
                    if (s === 0) { total = -1; break; }
                    total += s;
                }
                const visible = hasTags && total >= 0;
                card.hidden = !visible;
                if (visible) matches.push({ card, total });
            });

            // Best matches first; ties keep the default order (most recently updated).
            matches.sort((a, b) => b.total - a.total);
            matches.forEach(m => grid.appendChild(m.card));

            count.textContent = matches.length + ' of ' + cards.length + ' projects';
            empty.hidden = matches.length > 0;
        }

        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const tag = chip.dataset.tag.toLowerCase();
                if (selected.has(tag)) selected.delete(tag); else selected.add(tag);
                chip.setAttribute('aria-pressed', selected.has(tag) ? 'true' : 'false');
                update();
            });
        });
        input.addEventListener('input', update);
        update();
    })();
    </script>
"""


def projects_index(projects):
    cards = "".join(
        f"""
                <a href="./{esc(p["slug"])}/" class="project-card" data-search="{esc(search_text(p))}" data-tags="{esc("|".join(t.lower() for t in filter_tags(p)))}">
                    <div class="project-header">
                        <h3 class="project-name">{esc(p["name"])}</h3>
                        <span class="project-arrow">→</span>
                    </div>
                    <p class="project-desc">{esc(p["description"])}</p>
                    <div class="project-tags">{tags_html(p["tags"])}</div>
                </a>"""
        for p in projects
    )

    # One chip per tag or language shared by at least two projects; rarer ones are found by search.
    counts = {}
    for p in projects:
        for t in filter_tags(p):
            counts[t] = counts.get(t, 0) + 1
    chips = "".join(
        f'<button type="button" class="tag-filter" data-tag="{esc(t)}" aria-pressed="false">'
        f'{esc(t)} <small>{n}</small></button>'
        for t, n in sorted(counts.items(), key=lambda kv: kv[0].lower())
        if n >= 2
    )

    return (
        head("All projects", f"Public repositories by {SITE['name']}, one page each.", "../", ["projects.css"])
        + f"""{nav("../")}
    <main>
        <section class="projects-index">
            <div class="section-inner">
                <span class="section-label">Projects</span>
                <h1 class="section-title">Things I've built</h1>
                <p class="project-lead">Public repositories, one page each. Most recently updated first.</p>

                <div class="projects-toolbar">
                    <input id="project-search" class="project-search" type="search" autocomplete="off"
                        placeholder="Search by name, tag or language…" aria-label="Search projects">
                    <div class="project-filters" role="group" aria-label="Filter by tag">{chips}</div>
                    <p class="project-count" id="project-count" aria-live="polite"></p>
                </div>

                <div class="projects-grid" id="projects-grid">{cards}
                </div>
                <p class="project-empty" id="project-empty" hidden>No projects match these filters.</p>
            </div>
        </section>
    </main>
"""
        + footer("../", "Back to portfolio ↑")
        + FILTER_JS
    )


def filter_tags(p):
    """Tags plus language, de-duplicated case-insensitively, original casing kept."""
    seen, out = set(), []
    for t in list(p["tags"]) + ([p["language"]] if p.get("language") else []):
        if t.lower() not in seen:
            seen.add(t.lower())
            out.append(t)
    return out


def search_text(p):
    return " ".join([p["name"], p["description"], *filter_tags(p)]).lower()


def build_projects():
    data = json.loads((CONTENT / "projects.json").read_text(encoding="utf-8"))
    listed = []

    for p in data["projects"]:
        slug = p["slug"]
        if not slug or "/" in slug:
            raise SystemExit(f"invalid slug: {slug!r}")

        page = PROJECTS_DIR / slug / "index.html"
        if p.get("enabled", True):
            write_page(page, project_page(p))
            listed.append(p)
        elif is_generated(page):
            remove_generated(page)
            print(f"removed disabled project page: {slug}")

    listed.sort(key=lambda p: p["updated"], reverse=True)
    write_page(PROJECTS_DIR / "index.html", projects_index(listed))
    print(f"projects: {len(listed)} pages + projects/index.html")


# ----------------------------------------------------------------- writing

def inline_md(text):
    text = esc(text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"!\[([^\]]*)\]\(([^)\s]+)\)", r'<img src="\2" alt="\1" loading="lazy">', text)
    text = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"(?<!\w)_(?!\s)(.+?)(?<!\s)_(?!\w)", r"<em>\1</em>", text)
    return text


def render_md(source):
    """Headings, paragraphs, lists, quotes, code blocks, links, images, bold and italics."""
    out, para, items, list_tag = [], [], [], None
    lines = source.splitlines()

    def flush():
        nonlocal para, items, list_tag
        if para:
            out.append(f"<p>{inline_md(' '.join(para))}</p>")
            para = []
        if items:
            out.append(f"<{list_tag}>" + "".join(f"<li>{inline_md(i)}</li>" for i in items) + f"</{list_tag}>")
            items, list_tag = [], None

    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        stripped = line.strip()
        if stripped.startswith("```"):
            flush()
            code = []
            i += 1
            while i < len(lines) and not lines[i].strip().startswith("```"):
                code.append(lines[i])
                i += 1
            out.append(f"<pre><code>{esc(chr(10).join(code))}</code></pre>")
        elif not stripped:
            flush()
        elif m := re.match(r"(#{1,4})\s+(.*)", stripped):
            flush()
            level = min(max(len(m.group(1)), 2), 4)
            out.append(f"<h{level}>{inline_md(m.group(2))}</h{level}>")
        elif stripped.startswith(">"):
            flush()
            out.append(f"<blockquote><p>{inline_md(stripped.lstrip('> '))}</p></blockquote>")
        elif m := re.match(r"([-*]|\d+\.)\s+(.*)", stripped):
            tag = "ol" if m.group(1)[0].isdigit() else "ul"
            if para or (list_tag and list_tag != tag):
                flush()
            list_tag = tag
            items.append(m.group(2))
        elif items:
            items[-1] += " " + stripped
        else:
            para.append(stripped)
        i += 1
    flush()
    return "\n".join(out)


def read_post(path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"---\s*\n(.*?)\n---\s*\n?(.*)", text, re.S)
    if not match:
        raise SystemExit(f"{path.name}: missing the --- header (title, date, summary)")
    meta = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            meta[key.strip()] = value.strip()
    for key in ("title", "date", "summary"):
        if not meta.get(key):
            raise SystemExit(f"{path.name}: missing '{key}' in the header")
    slug = re.sub(r"^\d{4}-\d{2}-\d{2}-", "", path.stem)
    return {
        "slug": slug,
        "title": meta["title"],
        "date": meta["date"],
        "summary": meta["summary"],
        "draft": meta.get("draft", "false").lower() == "true",
        "body": match.group(2),
    }


def post_page(post):
    return (
        head(post["title"], post["summary"], "../../", ["writing.css"])
        + f"""{nav("../../")}
    <main>
        <article class="post">
            <div class="section-inner">
                <span class="section-label">Writing</span>
                <h1 class="section-title">{esc(post["title"])}</h1>
                <p class="post-meta">{fmt_date(post["date"])}</p>
                <div class="post-body">
{render_md(post["body"])}
                </div>
            </div>
        </article>
    </main>
"""
        + footer("../../#posts", "← All writing")
    )


def build_writing():
    posts = [read_post(p) for p in sorted((CONTENT / "writing").glob("*.md"))]
    published = sorted((p for p in posts if not p["draft"]), key=lambda p: p["date"], reverse=True)
    slugs = {p["slug"] for p in published}

    for post in published:
        write_page(WRITING_DIR / post["slug"] / "index.html", post_page(post))
    for page in WRITING_DIR.glob("*/index.html"):
        if page.parent.name not in slugs and is_generated(page):
            remove_generated(page)
            print(f"removed unpublished post page: {page.parent.name}")

    listing = [{k: p[k] for k in ("slug", "title", "date", "summary")} for p in published]
    WRITING_DIR.mkdir(exist_ok=True)
    (WRITING_DIR / "posts.json").write_text(json.dumps(listing, indent=2, ensure_ascii=False) + "\n", encoding="utf-8", newline="\n")
    print(f"writing: {len(published)} published, {len(posts) - len(published)} drafts")


# ------------------------------------------------------------------- main

def version_hand_written_pages():
    for name in HAND_WRITTEN_PAGES:
        page = ROOT / name
        text = page.read_text(encoding="utf-8")
        updated = versioned(text)
        if updated != text:
            page.write_text(updated, encoding="utf-8", newline="\n")
    print("asset versions: " + ", ".join(HAND_WRITTEN_PAGES))


def main():
    build_projects()
    build_writing()
    version_hand_written_pages()


if __name__ == "__main__":
    main()
