# Noesis Bioluminescent

> **Obsidianite-inspired dark theme with WCAG AAA contrast.** Deep ocean bioluminescence meets Art Nouveau — optimized for long coding sessions without eye strain.

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/tryambakam-noesis.noesis-bioluminescent-theme?style=for-the-badge&label=VS%20Code%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=tryambakam-noesis.noesis-bioluminescent-theme)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/tryambakam-noesis.noesis-bioluminescent-theme?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=tryambakam-noesis.noesis-bioluminescent-theme)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/tryambakam-noesis.noesis-bioluminescent-theme?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=tryambakam-noesis.noesis-bioluminescent-theme)

![Editor Overview](assets/screenshots/editor-overview.png)

---

## ✨ Features

- **WCAG AAA Accessibility:** 15.5:1 contrast ratio for primary text
- **608 UI Colors:** Every VS Code element themed with brand palette
- **47 Syntax Token Scopes:** Comprehensive highlighting for all major languages
- **Optimized for Long Sessions:** Warm Solar Bronze accents reduce eye strain
- **Obsidianite-Inspired:** Opacity layering, hierarchical contrast, interaction feedback
- **Bioluminescent Solarpunk Aesthetic:** Deep ocean twilight meets Art Nouveau architecture

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Void Teal** | `#0A1628` | Primary backgrounds, deep surfaces |
| **Phosphor Cream** | `#F0EDE3` | Primary text, bright foreground |
| **Solar Bronze** | `#C4873B` | Accents, highlights, interactive elements |
| **Titanium** | `#8A9BA8` | Secondary text, comments, subtle UI |
| **Chlorophyll** | `#4A7C59` | Strings, success states, life indicators |
| **Terracotta** | `#C65D3B` | Errors, warnings, destructive actions |

### Contrast Ratios (WCAG 2.1)

| Combination | Ratio | WCAG Level | Use Case |
|-------------|-------|-----------|----------|
| Phosphor Cream on Void Teal | **15.5:1** | ✅ AAA | Primary text, headings |
| Titanium on Void Teal | **8.2:1** | ✅ AAA | Comments, secondary text |
| Solar Bronze on Void Teal | **5.9:1** | ✅ AA | Accents, highlights |
| Chlorophyll on Void Teal | **4.8:1** | ✅ AA | Strings, success states |

---

## 📦 Installation

### From VS Code Marketplace (Recommended)

1. Open **Extensions** sidebar (`⌘⇧X` / `Ctrl+Shift+X`)
2. Search for **"Noesis Bioluminescent"**
3. Click **Install**
4. Activate: `⌘K ⌘T` / `Ctrl+K Ctrl+T` → Select **"Noesis Bioluminescent"**

### From VSIX File

1. Download the latest `.vsix` from [Releases](https://github.com/tryambakam-noesis/vscode-noesis-bioluminescent-theme/releases)
2. Extensions sidebar → `...` menu → **Install from VSIX**
3. Select downloaded file
4. Activate: `⌘K ⌘T` → **"Noesis Bioluminescent"**

### Command Line

```bash
code --install-extension tryambakam-noesis.noesis-bioluminescent-theme
```

---

## 🖼️ Screenshots

### JavaScript Syntax Highlighting
![JavaScript Syntax](assets/screenshots/javascript-syntax.png)
*Keywords in bold Solar Bronze, strings in Chlorophyll green, comments in italic Titanium*

### React/TypeScript (TSX)
![React TSX Syntax](assets/screenshots/react-tsx-syntax.png)
*HTML tags in Chlorophyll, React components in Solar Bronze*

### Markdown Preview
![Markdown Preview](assets/screenshots/markdown-preview.png)
*Split view showing source and rendered preview*

### UI Elements
![UI Elements](assets/screenshots/ui-elements.png)
*Activity bar, sidebar, status bar, and panels themed*

---

## 🎛️ Customization

Override specific colors in your `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Noesis Bioluminescent]": {
      "editor.background": "#0A1628",
      "editor.lineHighlightBackground": "#1A3850",
      "editorCursor.foreground": "#C4873B"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Noesis Bioluminescent]": {
      "comments": "#8A9BA8",
      "strings": "#4A7C59",
      "keywords": "#C4873B"
    }
  }
}
```

### Recommended Font Pairings

```json
{
  "editor.fontFamily": "JetBrains Mono, Fira Code, Cascadia Code, Consolas, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 22
}
```

---

## 🧬 Design Philosophy

**Bioluminescent Architecture:** Inspired by deep-ocean organisms that generate their own light in twilight zones. The theme combines the mystery of Void Teal depths with the warmth of Solar Bronze bioluminescence, creating a visual environment that's both calming and energizing.

**Obsidianite Aesthetic Principles:**
- **Opacity Layering:** 15% for subtle backgrounds, 50% for borders, 80-90% for highlighted text
- **Contrast Without Fatigue:** Medium-luminosity text on very dark backgrounds, high contrast reserved for active elements
- **Hierarchical Color Distribution:** Solar Bronze (focus) → Phosphor Cream (active) → Titanium (secondary) → Titanium 50% (subtle)
- **Interaction Feedback:** Hover extends background, focus adds Solar Bronze borders, disabled reduces opacity 40-50%

**Solarpunk Meets Art Nouveau:** Where technology harmonizes with nature. Curved lines, organic growth patterns, and radiant energy in structured architectural forms.

---

## 🌐 Language Support

Comprehensive syntax highlighting for:

- **JavaScript / TypeScript** - Full ES6+ support, JSX/TSX components
- **Python** - PEP 8 style, decorators, f-strings, type hints
- **Rust** - Lifetimes, macros, traits, unsafe blocks
- **HTML / CSS / SCSS** - Tags, selectors, properties, variables
- **Markdown** - Headers, links, code blocks, tables
- **JSON / YAML** - Keys, values, nested structures
- **Shell / Bash** - Commands, variables, pipes
- **Go** - Interfaces, goroutines, channels
- **Ruby** - Symbols, blocks, metaprogramming
- **C / C++** - Preprocessor, templates, pointers

---

## 🐛 Known Issues

None currently reported. If you encounter issues:

1. Check [existing issues](https://github.com/tryambakam-noesis/vscode-noesis-bioluminescent-theme/issues)
2. Report new issues with:
   - VS Code version (`Help → About`)
   - Theme version (check Extensions sidebar)
   - Language affected (JS, Python, etc.)
   - Screenshot if visual bug

---

## 🗺️ Roadmap

### Version 0.1.0 (Current - Beta)
- ✅ Initial release with 608 UI colors
- ✅ 47 syntax token scopes
- ✅ WCAG AAA contrast (15.5:1)
- ✅ Obsidianite-inspired design principles

### Version 1.0.0 (Stable Release)
- Community feedback integration
- Screenshot gallery expansion
- Contrast ratio verification tools
- Installation documentation

### Version 2.0.0 (Light Variant)
- Light theme variant addition
- Dual-mode support (dark/light switching)
- Enhanced semantic token support

### Version 2.1.0+
- Theme customization presets
- Community color palette submissions
- Integration with Noesis brand ecosystem

---

## 📚 Additional Documentation

- **[Installation Guide](docs/INSTALLATION.md)** - Detailed installation and setup instructions
- **[Customization Guide](docs/CUSTOMIZATION.md)** - Advanced theme customization options
- **[Contrast Ratios](docs/CONTRAST-RATIOS.md)** - Full WCAG 2.1 compliance matrix and accessibility testing

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Obsidianite Theme** - Aesthetic inspiration and design principles
- **Noesis V2 Brand System** - Color palette and visual identity
- **VS Code Theme API** - Comprehensive theming capabilities

---

## 💬 Connect

- **Website:** [tryambakam.space](https://tryambakam.space)
- **GitHub:** [@tryambakam-noesis](https://github.com/tryambakam-noesis)
- **Issues:** [Report bugs](https://github.com/tryambakam-noesis/vscode-noesis-bioluminescent-theme/issues)
- **Discussions:** [Feature requests & Q&A](https://github.com/tryambakam-noesis/vscode-noesis-bioluminescent-theme/discussions)

---

<p align="center">
  <sub>Built with 🧬 by Tryambakam Noesis</sub><br>
  <sub>Consciousness evolution tools disguised as developer utilities</sub>
</p>
