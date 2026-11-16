# Documentation

## Create a presentation

1. Create a directory under the year folder (or a thematic group like `2026/EDDI/…`).
2. Copy the content of [`template/`](./template/).
3. Edit **`slides.md`** for content. Leave **`slides.html`** / **`ms.css`** alone unless you need shell or style changes.

The starter deck with horizontal/vertical examples lives in [`template/`](./template/).

## Markdown layout (horizontal + vertical)

Content is authored in Markdown. You do **not** need HTML for nested chapters.

| Separator | Effect |
| --- | --- |
| `---` on its own line | next **horizontal** slide (new chapter) |
| `--` on its own line | next **vertical** slide (detail under the same chapter) |
| `Note:` at line start | speaker notes for the current slide |

Do not use `----` (four dashes). Put `---` / `--` alone on a line (blank lines around them are fine). Separators are `^---$` / `^--$`.

Wired in `slides.html` via `data-separator` / `data-separator-vertical` / `data-separator-notes` ([reveal.js Markdown](https://revealjs.com/markdown/)).

## Local run

External Markdown needs a local HTTP server (not `file://`):

```sh
# Python
pip install livereload
livereload --port 8000 .

# Node
npx live-server .

# Ruby
gem install rerun
rerun "ruby -run -e httpd . -p 8000"
```

Then open the presentation folder’s `slides.html` (e.g. `http://localhost:8000/2026/20261202-activating-ddi/slides.html`).

## GitHub Pages

This repo is published as a static site from the repository root (see [making-sense-info.github.io/Presentations](https://making-sense-info.github.io/Presentations/)).

- A root [`.nojekyll`](./.nojekyll) file tells GitHub Pages not to run Jekyll, so `slides.md` and asset paths stay as plain static files.
- Decks load Reveal and plugins from CDN (cdnjs / jsdelivr), so Pages only needs to serve HTML/CSS/MD/images.
- Prefer dated folder names without spaces (`YYYYMMDD-slug`). If a path has spaces, encode them as `%20` in links.
- Always open `…/slides.html` over `https://` (or local HTTP). Opening as `file://` breaks external Markdown.

## Features

- Notes (`S`)
- Syntax highlight
- Mermaid (optional diagrams in Markdown)
- Light / dark switch (top right, persisted in `localStorage`)
- PDF export button (bottom left) → opens `?print-pdf` then browser print

Reveal.js version: **6.0.2** (cdnjs). Plugins: built-in `markdown` / `notes` / `highlight`, plus [`reveal.js-mermaid-plugin@11`](https://www.npmjs.com/package/reveal.js-mermaid-plugin). See [revealjs.com](https://revealjs.com/) and [upgrade notes](https://revealjs.com/upgrading/).

## Legacy note

Older 2023/2024 talks that used to be inline HTML are now on the same markdown template (`slides.md` + Reveal 6 shell). For `2024/20241009-expert-group`, `index.html` redirects to `slides.html` so old links keep working.
