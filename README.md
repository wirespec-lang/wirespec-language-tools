# wirespec-language-tools

VS Code extension providing language support for the [wirespec](https://github.com/wirespec-lang/wirespec) protocol description language.

## Features

- Syntax highlighting for `.wspec` files
- Keyword, type, and annotation highlighting
- Comment, string, and numeric literal support (decimal, hex, binary, octal)
- Bracket matching and auto-closing pairs
- Code folding

## Language Server

The extension connects to `wirespec-lsp` for real-time diagnostics (parse and semantic errors).

### Setup

1. Install the LSP server: `cargo install --path /path/to/wirespec/crates/wirespec-lsp`
2. Ensure `wirespec-lsp` is on your PATH
3. Or configure `wirespec.lsp.serverPath` in VS Code settings

### LSP Features

- Real-time error diagnostics (parse errors, type errors, undefined references)

## Installation

1. Clone this repository
2. Run `code --install-extension .` from the repo root, or press F5 in VS Code to launch an Extension Development Host

## Development

The grammar is defined in `syntaxes/wirespec.tmLanguage.json` using the TextMate grammar format.

## License
Apache-2.0

Copyright (c) 2026 mp0rta
