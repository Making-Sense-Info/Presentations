#!/usr/bin/env bash
# Thin wrapper — prefer: node serve.mjs
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
exec node "$ROOT/serve.mjs" "$@"
