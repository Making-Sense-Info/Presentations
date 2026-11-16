# Making Sense

**Presentation template**

_Horizontal = chapters · Vertical = detail within a chapter_

---

## How to navigate

- ← → move between chapters (horizontal)
- ↑ ↓ move within a chapter (vertical)
- `Space` walks the whole deck in order
- `S` opens speaker notes
- Theme / PDF buttons stay at the bottom left

Note: Speaker notes look like this. They only show in the notes window.

---

## Chapter 1 — Lorem

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

--

### 1.1 — Nested detail

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

--

### 1.2 — More detail

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Note: Vertical slides share one horizontal “slot”. Useful for one topic, several beats.

---

## Chapter 2 — Lists

Excepteur sint occaecat cupidatat non proident:

- Sed ut perspiciatis unde omnis
- Nemo enim ipsam voluptatem
- Quis autem vel eum iure

--

### 2.1 — Ordered

1. Primis in faucibus
2. Orci luctus et ultrices
3. Posuere cubilia curae

--

### 2.2 — Quote

> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.

---

## Chapter 3 — Code

Markdown stays the source of truth. HTML is only the reveal.js shell.

```js [1-2|3-4]
const greet = (name) => `Hello, ${name}`;
console.log(greet("EDDI"));
// step through highlighted lines with fragments
```

--

### 3.1 — Separators reminder

| Separator | Meaning |
| --- | --- |
| `---` | next **horizontal** slide (new chapter) |
| `--` | next **vertical** slide (same chapter) |
| `Note:` | speaker notes for the current slide |

--

### 3.2 — Mermaid

<div class="mermaid">
flowchart LR
  MD[slides.md] --> Reveal[Reveal 6]
  Reveal --> PDF[PDF]
  Reveal --> Theme[Light / Dark]
</div>

---

## Closing

Thanks — copy this folder (or `template/`) and replace the lorem with your talk.

_Making Sense_
