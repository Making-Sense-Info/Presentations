#!/usr/bin/env node
/** Refresh index.html stubs in every deck (and template/). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const shellDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(shellDir);
const indexTpl = fs.readFileSync(path.join(shellDir, "deck-index.html"), "utf8");

function walk(dir, out = []) {
	for (const name of fs.readdirSync(dir)) {
		if (name === ".git" || name === "_shell" || name === "node_modules") continue;
		const full = path.join(dir, name);
		const st = fs.statSync(full);
		if (st.isDirectory()) walk(full, out);
		else if (name === "slides.md") out.push(path.dirname(full));
	}
	return out;
}

for (const deckDir of walk(root)) {
	const rel = path.relative(root, deckDir).split(path.sep).join("/");
	fs.writeFileSync(path.join(deckDir, "index.html"), indexTpl.replaceAll("__DECK__", rel));
	// Drop legacy per-deck launchers if present
	for (const legacy of ["serve.mjs", "package.json"]) {
		const p = path.join(deckDir, legacy);
		if (fs.existsSync(p)) fs.unlinkSync(p);
	}
	console.log(rel);
}
