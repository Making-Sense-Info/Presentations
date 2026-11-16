# Documentation

## Create a presentation

1. Create a directory under the year folder (or a thematic group like `2026/EDDI/…`).
2. Copy [`template/slides.md`](./template/slides.md) + [`template/deck.json`](./template/deck.json), then from the repo root run `npm run sync-stubs` (writes `index.html`).
3. Edit **`slides.md`** / **`deck.json`**.
4. From that folder: `deck` (after one-time setup below). Public URL = the deck folder.

Shell, CSS, logo, Reveal, and the local server live only at the repo root / [`_shell/`](./_shell/). Deck folders keep content + `index.html` only.

The starter deck lives in [`template/`](./template/).

## Markdown layout (horizontal + vertical)

Content is authored in Markdown. You do **not** need HTML for nested chapters.

| Separator | Effect |
| --- | --- |
| `---` on its own line | next **horizontal** slide (new chapter) |
| `--` on its own line | next **vertical** slide (detail under the same chapter) |
| `Note:` at line start | speaker notes for the current slide |

Do not use `----` (four dashes). Put `---` / `--` alone on a line (blank lines around them are fine). Separators are `^---$` / `^--$`.

Wired in `_shell/slides.html` via `data-separator` / `data-separator-vertical` / `data-separator-notes` ([reveal.js Markdown](https://revealjs.com/markdown/)).

## Local run

External Markdown needs a local HTTP server (not `file://`) rooted on the **repository root** (`Presentations/`). Serving only a deck subfolder cannot see `_shell/` (static servers do not expose `../`).

That does not “launch all decks” — only the URL you open is loaded; other folders are just files on disk.

One-time per machine (registers the `deck` command):

```sh
cd /path/to/Presentations
npm link
```

Then from any deck folder:

```sh
deck
```

Same from the repo root: `npm start` or `node serve.mjs 2024/20241009-expert-group`.

## GitHub Pages

This repo is published as a static site from the repository root (see [making-sense-info.github.io/Presentations](https://making-sense-info.github.io/Presentations/)).

- A root [`.nojekyll`](./.nojekyll) file tells GitHub Pages not to run Jekyll, so `slides.md` and asset paths stay as plain static files.
- Decks load Reveal and plugins from CDN (cdnjs / jsdelivr); Pages serves `_shell/` + each deck’s markdown/assets.
- Prefer dated folder names without spaces (`YYYYMMDD-slug`). Spaces need `%20` in links (e.g. `DDI%20and%20DCAT`).
- Share the deck folder URL (`…/YYYY/slug/`). Each `index.html` redirects to the shared `_shell`.
- Always open over `https://` (or local HTTP). Opening as `file://` breaks external Markdown.

## Features

- Notes (`S`)
- Syntax highlight
- Mermaid (optional diagrams in Markdown)
- Light / dark switch (top right, persisted in `localStorage`)
- PDF export button (bottom left) → opens `?deck=…&print-pdf` then browser print
- Tall slides scroll inside the slide when content overflows (short slides stay centered, no scrollbar)

Reveal.js version: **6.0.2** (cdnjs). Plugins: built-in `markdown` / `notes` / `highlight`, plus [`reveal.js-mermaid-plugin@11`](https://www.npmjs.com/package/reveal.js-mermaid-plugin). See [revealjs.com](https://revealjs.com/) and [upgrade notes](https://revealjs.com/upgrading/).

## Legacy note

Older 2023/2024 talks that used to be inline HTML are now on the shared markdown + `_shell` pattern. Every Reveal deck has an `index.html` that redirects to `_shell`. `2024/20241204-eddi24` stays Typst (not Reveal).
