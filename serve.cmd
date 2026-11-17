@echo off
REM Thin wrapper for Windows cmd — prefer: node serve.mjs
node "%~dp0serve.mjs" %*
