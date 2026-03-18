<p align="center">
  <img src="https://raw.githubusercontent.com/neopilot-ai/neoai-code/main/vscode/media/neoai-logo-dark.svg" width="200" alt="NeoAI Logo"/>
</p>

<h1 align="center">NeoAI</h1>

<p align="center">
  <strong>AI-Powered Code Assistant for Everyone</strong><br>
  Autocomplete, Chat, Code Review, and More — Available in Your Favorite Editor
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/neopilot-ai/Neoai?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/neopilot-ai/Neoai?style=social" alt="GitHub Forks">
  <img src="https://img.shields.io/badge/Platforms-VSCode%20%7C%20Neovim%20%7C%20IntelliJ%20%7C%20Jupyter-blue" alt="Platforms">
  <img src="https://img.shields.io/badge/Languages-20%2B-orange" alt="Languages">
  <img src="https://img.shields.io/github/license/neopilot-ai/Neoai" alt="License">
</p>

---

## 🚀 Features

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ✨  Smart Autocomplete        💬  AI Chat Interface                       │
│   ┌─────────────────────┐       ┌─────────────────────┐                    │
│   │  context-aware       │       │  ask questions      │                    │
│   │  multi-line         │       │  get explanations   │                    │
│   │  20+ languages      │       │  generate code      │                    │
│   └─────────────────────┘       └─────────────────────┘                    │
│                                                                             │
│   🔍  Code Review              📝  Documentation Generation                 │
│   ┌─────────────────────┐       ┌─────────────────────┐                    │
│   │  detect issues       │       │  auto-generate      │                    │
│   │  suggest fixes       │       │  docs from code     │                    │
│   │  best practices     │       │  markdown support   │                    │
│   └─────────────────────┘       └─────────────────────┘                    │
│                                                                             │
│   🧪  Test Generation            🔧  Code Fixes & Refactoring               │
│   ┌─────────────────────┐       ┌─────────────────────┐                    │
│   │  unit tests         │       │  bug fixes          │                    │
│   │  integration tests  │       │  style improvements │                    │
│   │  edge cases         │       │  security patches   │                    │
│   └─────────────────────┘       └─────────────────────┘                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 📦 Supported Platforms

| Platform | Status | Install |
|----------|--------|---------|
| <img src="https://code.visualstudio.com/assets/images/codeinworkspace.png" width="16"/> **VS Code** | ✅ Stable | [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=NeoAi.neoai-vscode) |
| <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Neovim-logo.svg" width="16"/> **Neovim** | ✅ Stable | Lua/Plugin Manager |
| <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" width="16"/> **IntelliJ** | ✅ Stable | JetBrains Marketplace |
| <img src="https://jupyter.org/assets/homepage/main-logo.svg" width="16"/> **Jupyter** | ✅ Stable | Docker |
| <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="16"/> **React Editor** | ✅ Stable | npm package |

## 💻 Supported Languages

```
         ┌──────────────────────────────────────────────────────────────────┐
         │                                                                  │
         │   ▸ JavaScript    ▸ TypeScript    ▸ Python    ▸ Rust          │
         │   ▸ Go            ▸ Java          ▸ C/C++      ▸ C#            │
         │   ▸ Ruby          ▸ PHP           ▸ Swift      ▸ Kotlin        │
         │   ▸ Go            ▸ Scala         ▸ Haskell    ▸ Lua            │
         │   ▸ OCaml        ▸ Perl          ▸ Julia      ▸ HTML/CSS      │
         │   ▸ SQL           ▸ Shell/Bash    ▸ Dockerfile  ▸ + More        │
         │                                                                  │
         └──────────────────────────────────────────────────────────────────┘
```

## 🏗️ Architecture

```
                              ┌─────────────────┐
                              │    User IDE     │
                              │  (VSCode/Nvim/  │
                              │   IntelliJ)     │
                              └────────┬────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          NeoAI Extension                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │  Autocomplete │  │    Chat      │  │  Code Review │                   │
│  │    Engine     │  │   Widget     │  │   Engine     │                   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘                   │
│         │                  │                  │                          │
│         └──────────────────┼──────────────────┘                          │
│                            ▼                                             │
│                   ┌─────────────────┐                                     │
│                   │  Binary Engine  │                                     │
│                   │   (Go/Rust)     │                                     │
│                   └────────┬────────┘                                     │
└────────────────────────────┼──────────────────────────────────────────────┘
                             │
                             ▼
                   ┌─────────────────┐
                   │   NeoAI API     │
                   │   (Cloud/On-Prem)│
                   └─────────────────┘
```

## ⚡ Quick Start

### VS Code

```bash
# Install from VS Code Marketplace
# OR via command line
code --install-extension NeoAi.neoai-vscode
```

### Neovim

```lua
-- Using packer.nvim
use 'neopilot-ai/neoai-code.nvim'

-- Using vim-plug
Plug 'neopilot-ai/neoai-code.nvim'
```

```lua
-- Configuration (optional)
require('neoai').setup({
  -- Enable/disable features
  auto_completion = true,
  chat = true,
  code_review = true,
  
  -- API settings
  api_key = os.getenv('NEOAI_API_KEY'),
})
```

### IntelliJ

1. Open IntelliJ IDEA
2. Go to **Settings → Plugins → Marketplace**
3. Search for "NeoAI"
4. Click **Install**
5. Restart IDE

### Jupyter

```bash
# Pull and run the Docker image
docker pull neoai/neoai-server:latest
docker run -p 8888:8888 neoai/neoai-server:latest
```

### React Component

```bash
# Install the React component
npm install @neoai/react-code-editor
# or
pnpm add @neoai/react-code-editor
```

```tsx
import { NeoCodeEditor } from '@neoai/react-code-editor';

function App() {
  return (
    <NeoCodeEditor
      language="typescript"
      onCompletion={(code) => handleCompletion(code)}
      apiEndpoint="https://api.neoai.com"
    />
  );
}
```

## 📊 Performance

| Metric | Value |
|--------|-------|
| ⚡ Autocomplete Latency | < 50ms (p95) |
| 🔄 Context Window | 4K-32K tokens |
| 🎯 Accuracy | 95%+ context relevance |
| 📦 Bundle Size | < 10MB |
| 🔋 Memory Usage | < 100MB |

## 🔒 Privacy & Security

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   🔐  Your Code Stays Private                                    │
│                                                                  │
│   ✓  Local processing option available                          │
│   ✓  End-to-end encryption                                      │
│   ✓  No code storage on servers (optional)                      │
│   ✓  SOC 2 Type II compliant                                    │
│   ✓  GDPR compliant                                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines first.

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/neoai-code.git
cd neoai-code

# Install dependencies
make install

# Run development mode
make dev

# Run tests
make test

# Build all components
make build
```

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Open source AI models that power NeoAI
- Contributors and the developer community
- Partner organizations

---

<p align="center">
  <strong>Made with ❤️ by the NeoAI Team</strong><br>
  <a href="https://neoai.com">Website</a> •
  <a href="https://docs.neoai.com">Documentation</a> •
  <a href="https://discord.gg/neoai">Discord</a> •
  <a href="https://twitter.com/Neoai">Twitter</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Powered_by-NeoAI-7C3AED?style=for-the-badge" alt="Powered by NeoAI">
</p>
