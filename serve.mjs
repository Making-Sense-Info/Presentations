#!/usr/bin/env node
/**
 * Start live-server from the Presentations repo root and open the current deck.
 * macOS / Linux / Windows (Node required).
 *
 * One-time:  cd Presentations && npm link
 * From a deck folder:  deck
 *
 * Or from the repo root:  npm start
 *                        node serve.mjs 2024/20241009-expert-group
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = process.env.PORT || "8080";

function toPosix(p) {
	return p.split(path.sep).join("/");
}

function findRoot(start) {
	let dir = path.resolve(start);
	for (;;) {
		if (fs.existsSync(path.join(dir, "_shell", "slides.html"))) {
			return dir;
		}
		const parent = path.dirname(dir);
		if (parent === dir) {
			console.error("Could not find Presentations root (_shell/slides.html)");
			process.exit(1);
		}
		dir = parent;
	}
}

/** This file may be the repo-root serve.mjs or a per-deck stub that re-execs it. */
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = fs.existsSync(path.join(scriptDir, "_shell", "slides.html"))
	? scriptDir
	: findRoot(process.cwd());

function detectDeck(explicit) {
	if (explicit) {
		const abs = path.resolve(ROOT, explicit);
		if (!fs.existsSync(path.join(abs, "slides.md"))) {
			console.error(`No slides.md in ${explicit}`);
			process.exit(1);
		}
		return toPosix(path.relative(ROOT, abs));
	}

	const cwd = process.cwd();
	const rel = path.relative(ROOT, cwd);
	if (rel.startsWith("..") || path.isAbsolute(rel)) {
		console.error("Not inside the Presentations repo");
		process.exit(1);
	}
	const relPosix = toPosix(rel);
	if (relPosix && fs.existsSync(path.join(cwd, "slides.md"))) {
		return relPosix;
	}
	return "";
}

const deck = detectDeck(process.argv[2]);
const args = ["--yes", "live-server", `--port=${PORT}`, "."];

if (deck) {
	// Pretty folder URL (index.html → shared _shell)
	args.push(`--open=${deck}/`);
	console.log(`Deck: ${deck}`);
} else {
	console.log("No deck selected — open a deck folder URL yourself");
}

const child = spawn("npx", args, {
	cwd: ROOT,
	stdio: "inherit",
	shell: true, // Windows: resolve npx.cmd
});

child.on("exit", (code, signal) => {
	if (signal) process.kill(process.pid, signal);
	process.exit(code ?? 1);
});
