# MoonHawlk.github.io

Personal portfolio website for Filipe Moreno — Data Scientist working with LLMs, NLP, RAG and GenAI.

**Live at:** [moonhawlk.github.io](https://moonhawlk.github.io)

---

## Stack

Plain HTML, CSS and vanilla JavaScript. No build step, no framework, no dependencies beyond two CDN scripts (Google Fonts + marked.js for Markdown parsing).

---

## Project Structure

```
.
├── index.html       # Full single-page site (all sections)
├── styles.css       # All styling — variables, layout, components, responsive
├── scripts.js       # Posts parser: reads posts.md and renders cards
├── posts.md         # Your writing — edit this to publish posts
├── favicon.svg      # SVG leaf icon
└── TASKS.md         # Ongoing redesign checklist
```

---

## How to Add a Post

Open `posts.md` and add a new block at the top (newest first):

```markdown
## Your Post Title
_YYYY-MM-DD_
One sentence that appears as the excerpt on the card.
```

- The `##` heading is the post title
- The date line (`_YYYY-MM-DD_`) is optional
- The next non-empty line becomes the excerpt shown on the site

No code changes needed — saving the file is enough.

---

## How to Update Content

| What to change | Where |
|---|---|
| Bio, hero text, about section | `index.html` — `#about` section |
| Experience entries | `index.html` — `#experience` section |
| Project cards | `index.html` — `#projects` section |
| Contact links | `index.html` — `#contact` section |
| Colors, fonts, spacing | `styles.css` — `:root` variables at the top |

---

## Running Locally

Because `scripts.js` fetches `posts.md` via `fetch()`, you need a local server (opening `index.html` directly in a browser will block the request).

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

---

## Contact

- Email: filipemoreno.ds@gmail.com
- LinkedIn: [linkedin.com/in/filipe-moreno](https://www.linkedin.com/in/filipe-moreno/)
- GitHub: [github.com/MoonHawlk](https://github.com/MoonHawlk)
