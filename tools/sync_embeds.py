"""Copy other repositories into this site as plain folders.

Each entry in EMBEDS is cloned, stripped of comments and of files that only
matter to the original repository (hosting config, dev docs), and written to
its folder here, which GitHub Pages then serves at /<folder>/.

Usage:
    python tools/sync_embeds.py                 # sync every embed
    python tools/sync_embeds.py constellation_watches
"""

import fnmatch
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MARKER = ".embed-source"

EMBEDS = [
    {
        "folder": "constellation_watches",
        "repo": "https://github.com/MoonHawlk/constallation_watches_store.git",
        "branch": "main",
        "exclude": [
            ".git", ".github", ".gitignore", ".htaccess",
            "README.md", "CLAUDE.md", "DEPLOY.md", "brand/docs",
        ],
        "forbidden": ["hostinger", "hpanel", "public_html", "ftp-deploy"],
    },
]

SENTINEL = "\x00"
REGEX_PREFIX_CHARS = set("(,=:[!&|?{};+-*%~^<>")
REGEX_PREFIX_WORDS = {"return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "yield", "await"}


def strip_js(src):
    out = []
    i, n = 0, len(src)
    templates = []
    last = ""

    def skip_block(start):
        end = src.find("*/", start + 2)
        end = n if end == -1 else end + 2
        return end, "\n" in src[start:end]

    while i < n:
        c = src[i]
        nxt = src[i + 1] if i + 1 < n else ""

        if templates and templates[-1] == 0 and c == "}":
            templates.pop()
            out.append(c)
            i += 1
            i = read_template(src, i, out, templates)
            last = "`"
            continue

        if c == "/" and nxt == "/":
            end = src.find("\n", i)
            i = n if end == -1 else end
            out.append(SENTINEL)
            continue
        if c == "/" and nxt == "*":
            i, multiline = skip_block(i)
            out.append(SENTINEL + "\n" + SENTINEL if multiline else SENTINEL)
            continue
        if c in "'\"":
            j = read_quoted(src, i, c)
            out.append(src[i:j])
            i = j
            last = c
            continue
        if c == "`":
            out.append(c)
            i = read_template(src, i + 1, out, templates)
            last = "`"
            continue
        if c == "/" and starts_regex(out, last):
            j = read_regex(src, i)
            out.append(src[i:j])
            i = j
            last = "/"
            continue

        if templates:
            if c == "{":
                templates[-1] += 1
            elif c == "}":
                templates[-1] -= 1
        out.append(c)
        if not c.isspace():
            last = c
        i += 1
    return clean_lines("".join(out))


def read_quoted(src, i, quote):
    j = i + 1
    while j < len(src) and src[j] != quote:
        if src[j] == "\\":
            j += 1
        elif src[j] == "\n":
            break
        j += 1
    return j + 1


def read_template(src, i, out, templates):
    j = i
    while j < len(src):
        if src[j] == "\\":
            j += 2
            continue
        if src[j] == "`":
            out.append(src[i:j + 1])
            return j + 1
        if src[j:j + 2] == "${":
            out.append(src[i:j + 2])
            templates.append(0)
            return j + 2
        j += 1
    out.append(src[i:])
    return len(src)


def starts_regex(out, last):
    if last == "" or last in REGEX_PREFIX_CHARS:
        return True
    tail = re.search(r"([A-Za-z_$][\w$]*)\s*$", "".join(out[-40:]))
    return bool(tail and tail.group(1) in REGEX_PREFIX_WORDS)


def read_regex(src, i):
    j, in_class = i + 1, False
    while j < len(src) and src[j] != "\n":
        ch = src[j]
        if ch == "\\":
            j += 2
            continue
        if ch == "[":
            in_class = True
        elif ch == "]":
            in_class = False
        elif ch == "/" and not in_class:
            j += 1
            while j < len(src) and (src[j].isalnum() or src[j] in "$_"):
                j += 1
            return j
        j += 1
    return j


def strip_css(src):
    out = []
    i, n = 0, len(src)
    while i < n:
        c = src[i]
        if c in "'\"":
            j = read_quoted(src, i, c)
            out.append(src[i:j])
            i = j
        elif src.startswith("/*", i):
            end = src.find("*/", i + 2)
            end = n if end == -1 else end + 2
            out.append(SENTINEL + "\n" + SENTINEL if "\n" in src[i:end] else SENTINEL)
            i = end
        else:
            out.append(c)
            i += 1
    return clean_lines("".join(out))


INLINE_BLOCK = re.compile(r"(<(script|style)\b[^>]*>)(.*?)(</\2\s*>)", re.S | re.I)


def strip_html(src):
    blocks = []

    def stash(match):
        open_tag, tag, body, close_tag = match.groups()
        body = strip_js(body) if tag.lower() == "script" else strip_css(body)
        blocks.append(open_tag + body + close_tag)
        return f"{SENTINEL}BLOCK{len(blocks) - 1}{SENTINEL}"

    src = INLINE_BLOCK.sub(stash, src)
    src = re.sub(r"<!--.*?-->", lambda m: SENTINEL + ("\n" + SENTINEL if "\n" in m.group(0) else ""), src, flags=re.S)
    src = clean_lines(src, keep=re.compile(f"{SENTINEL}BLOCK\\d+{SENTINEL}"))
    return re.sub(f"{SENTINEL}BLOCK(\\d+){SENTINEL}", lambda m: blocks[int(m.group(1))], src)


def clean_lines(text, keep=None):
    result = []
    dropped = False
    for line in text.split("\n"):
        protected = keep.sub("", line) if keep else line
        if SENTINEL in protected:
            line = line.replace(SENTINEL, "") if not keep else keep_split(line, keep)
            if not line.strip():
                dropped = True
                continue
            line = line.rstrip()
        if not line.strip():
            if dropped and result and not result[-1].strip():
                continue
            if dropped and not result:
                continue
        else:
            dropped = False
        result.append(line)
    return "\n".join(result)


def keep_split(line, keep):
    parts = keep.split(line)
    found = keep.findall(line)
    merged = parts[0].replace(SENTINEL, "")
    for token, part in zip(found, parts[1:]):
        merged += token + part.replace(SENTINEL, "")
    return merged


STRIPPERS = {".js": strip_js, ".mjs": strip_js, ".css": strip_css, ".html": strip_html, ".htm": strip_html, ".svg": strip_html}


def excluded(rel, patterns):
    return any(rel == p or rel.startswith(p + "/") or fnmatch.fnmatch(rel, p) for p in patterns)


def sync(embed):
    dest = ROOT / embed["folder"]
    if dest.exists() and any(dest.iterdir()) and not (dest / MARKER).exists():
        sys.exit(f"{dest} exists and was not created by this script; refusing to overwrite it.")

    with tempfile.TemporaryDirectory() as tmp:
        src = Path(tmp) / "repo"
        subprocess.run(["git", "clone", "--quiet", "--depth", "1", "--branch", embed["branch"], embed["repo"], str(src)], check=True)
        commit = subprocess.run(["git", "-C", str(src), "rev-parse", "HEAD"], check=True, capture_output=True, text=True).stdout.strip()

        if dest.exists():
            shutil.rmtree(dest)
        dest.mkdir(parents=True)

        for path in sorted(src.rglob("*")):
            rel = path.relative_to(src).as_posix()
            if path.is_dir() or excluded(rel, embed["exclude"]):
                continue
            target = dest / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            strip = STRIPPERS.get(path.suffix.lower())
            if strip:
                text = path.read_text(encoding="utf-8")
                target.write_text(strip(text), encoding="utf-8", newline="\n")
            else:
                shutil.copy2(path, target)

    problems = []
    for path in dest.rglob("*"):
        if path.is_file() and path.suffix.lower() in STRIPPERS:
            text = path.read_text(encoding="utf-8").lower()
            problems += [f"{path.relative_to(ROOT)}: '{word}'" for word in embed["forbidden"] if word in text]
    if problems:
        sys.exit("Forbidden references found:\n  " + "\n  ".join(problems))

    (dest / MARKER).write_text(f"{embed['repo']}\n{embed['branch']}\n{commit}\n", encoding="utf-8", newline="\n")
    print(f"{embed['folder']}: synced {commit[:7]} from {embed['repo']}")


def main():
    wanted = set(sys.argv[1:])
    for embed in EMBEDS:
        if not wanted or embed["folder"] in wanted:
            sync(embed)


if __name__ == "__main__":
    main()
