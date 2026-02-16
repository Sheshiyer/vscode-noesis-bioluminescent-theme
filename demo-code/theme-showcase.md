# Noesis Bioluminescent Theme

> **Obsidianite-inspired dark theme** with WCAG AAA contrast

## Features

- **608 UI Colors** - Every VS Code element themed with Noesis V2 palette
- **47 Syntax Token Scopes** - Comprehensive highlighting for all languages
- **15.5:1 Contrast Ratio** - WCAG AAA accessibility standard
- **Bioluminescent Architecture** - Deep ocean twilight meets Art Nouveau

## Color Palette

| Color | Hex | Usage | Contrast |
|-------|-----|-------|----------|
| **Void Teal** | `#0A1628` | Backgrounds, primary surfaces | Base |
| **Phosphor Cream** | `#F0EDE3` | Primary text, bright foreground | 15.5:1 AAA |
| **Solar Bronze** | `#C4873B` | Accents, highlights, interactive | 5.9:1 AA |
| **Titanium** | `#8A9BA8` | Secondary text, comments, subtle UI | 8.2:1 AAA |
| **Chlorophyll** | `#4A7C59` | Strings, success states, life indicators | 4.8:1 AA |
| **Terracotta** | `#C65D3B` | Errors, warnings, destructive actions | 5.1:1 AA |

## Design Philosophy

**Bioluminescent Architecture:** Inspired by deep-ocean organisms that generate their own light in twilight zones. The theme combines the mystery of Void Teal depths with the warmth of Solar Bronze bioluminescence.

### Aesthetic Principles

1. **Opacity Layering Strategy**
   - 15% for subtle backgrounds (tags, inactive states)
   - 50% for borders and interactive hover states
   - 80-90% for highlighted text
   - Avoid solid 100% colored backgrounds

2. **Contrast Without Fatigue**
   - Medium-luminosity text on very dark backgrounds
   - High contrast reserved for active elements only
   - Warm Solar Bronze accents reduce eye strain

3. **Hierarchical Color Distribution**
   - **Level 1:** Solar Bronze accents (primary focus)
   - **Level 2:** Phosphor Cream text (active content)
   - **Level 3:** Titanium text (secondary info)
   - **Level 4:** Titanium 50% (subtle UI)

## Code Example

```javascript
const theme = {
  name: 'Noesis Bioluminescent',
  type: 'dark',
  colors: {
    background: '#0A1628',
    foreground: '#F0EDE3',
    accent: '#C4873B'
  },
  tokenColors: [
    { scope: 'keyword', foreground: '#C4873B', fontStyle: 'bold' },
    { scope: 'string', foreground: '#4A7C59' },
    { scope: 'comment', foreground: '#8A9BA8', fontStyle: 'italic' }
  ]
};
```

## Installation

```bash
# From VS Code Marketplace
code --install-extension tryambakam-noesis.noesis-bioluminescent-theme

# From VSIX file
code --install-extension noesis-bioluminescent-theme-0.1.0.vsix
```

## Language Support

- ✅ JavaScript / TypeScript
- ✅ React (JSX/TSX)
- ✅ Python
- ✅ Rust
- ✅ HTML / CSS / SCSS
- ✅ Markdown
- ✅ JSON / YAML
- ✅ Shell / Bash

---

**Built with 🧬 by Tryambakam Noesis**
*Consciousness evolution tools disguised as developer utilities*
