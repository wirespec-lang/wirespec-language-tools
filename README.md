# wirespec-language-tools

VS Code extension for the [wirespec](https://github.com/wirespec-lang/wirespec) protocol description language.

## Features

### Syntax Highlighting

Full TextMate grammar for `.wspec` files — keywords, types, annotations, operators, comments, string/numeric literals, and PascalCase type name detection.

### Language Server (wirespec-lsp)

Real-time language intelligence powered by `wirespec-lsp`:

- **Diagnostics** — parse errors and type errors as you type, with warnings for unreachable states
- **Go to Definition** — ctrl/cmd-click type names to jump to their definition
- **Hover** — see type information for packets, enums, consts, fields
- **Completion** — context-aware suggestions for keywords, types, annotations, SM keywords, ASN.1 encodings
- **Document Symbols** — outline view showing all declarations (packets, frames, enums, state machines, etc.)
- **Semantic Tokens** — high-precision highlighting that supplements the TextMate grammar

### Code Snippets

12 snippets for common patterns: `packet`, `frame`, `capsule`, `state machine`, `transition`, `enum`, `const`, `type`, `verify`, `verify property`, `extern asn1`, and more.

### Editor Support

- Bracket matching and auto-closing (`{}`, `[]`, `()`, `""`)
- Code folding
- Comment toggling (`//`)

## Setup

### 1. Install the language server

```bash
git clone https://github.com/wirespec-lang/wirespec
cd wirespec
cargo install --path crates/wirespec-lsp
```

This installs `wirespec-lsp`, the language server binary. For the wirespec compiler (`wirespec compile`, `wirespec verify`), see the [wirespec README](https://github.com/wirespec-lang/wirespec).

### 2. Install the extension

**From source (development):**

```bash
git clone https://github.com/wirespec-lang/wirespec-language-tools
cd wirespec-language-tools
npm install
npx tsc -p ./
```

Then in VS Code: press **F5** to launch an Extension Development Host, or:

```bash
code --extensionDevelopmentPath=/path/to/wirespec-language-tools
```

### 3. Verify it works

Open any `.wspec` file. You should see:
- Syntax highlighting immediately
- Error diagnostics within a second (red underlines for errors, yellow for warnings)
- Completion when typing `:` or `@`
- Hover info on type names

### Configuration

| Setting | Default | Description |
|---|---|---|
| `wirespec.lsp.serverPath` | `wirespec-lsp` | Path to the LSP server binary. Set this if `wirespec-lsp` is not on your PATH. |

## Troubleshooting

**No diagnostics / features not working:**
- Check that `wirespec-lsp` is installed: `wirespec-lsp --help`
- Check VS Code Output panel → "wirespec LSP" for errors
- Set `wirespec.lsp.serverPath` to the full path of the binary

**Highlighting looks wrong:**
- The TextMate grammar provides basic highlighting immediately
- Semantic tokens from the LSP provide higher precision after the server starts

## License

Apache-2.0

Copyright (c) 2026 mp0rta
