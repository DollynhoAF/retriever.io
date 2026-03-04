# RETRIEVER 2.6 — Design System Rules

You are an expert frontend engineer working on the **RETRIEVER 2.6 Design System**.
This is the Single Source of Truth (SSoT) for all UI decisions in this project.

## Stack

- **Framework:** Next.js 14+ with App Router
- **UI Library:** Chakra UI v3 (`@chakra-ui/react`)
- **Language:** TypeScript (strict)
- **Package Manager:** pnpm
- **Theme:** Custom system via `createSystem()` — see `theme/index.ts`
- **Font:** Montserrat (400 regular, 500 medium, 700 bold) via `next/font/google`
- **Color Mode:** next-themes (light/dark)

---

## Token Architecture

```
Figma Variable Collection  →  Chakra UI Layer
─────────────────────────────────────────────
--Foundations (colors)     →  tokens.colors.*          (primitives)
--Sizing (units/radii)     →  tokens.spacing / radii   (primitives)
--Typography               →  tokens.fonts / fontSizes  (primitives)
--Semantic                 →  semanticTokens.colors.*  (aliases)
```

### The Golden Rule
**Always use semantic tokens in components. Never use primitive tokens directly.**

```tsx
// ✅ Correct
<Box bg="bg.surface" color="text.heading" />

// ❌ Wrong — primitives are internal only
<Box bg="gray.0" color="gray.800" />
```

---

## Complete Token Reference

### Semantic Tokens — Backgrounds (`bg.*`)
| Token | Light | Dark |
|-------|-------|------|
| `bg.surface` | gray/0 `#FFFFFF` | gray/950 `#05070A` |
| `bg.subtle` | gray/50 `#F9FAFA` | gray/900 `#0C1015` |
| `bg.muted` | gray/100 `#F1F1F2` | gray/800 `#19202B` |
| `bg.canvas` | gray/200 `#E6E7E9` | gray/700 `#2E3744` |
| `bg.emphasized` | gray/300 `#D2D4D7` | gray/600 `#4D5560` |
| `bg.inverted` | gray/700 `#2E3744` | gray/50 `#F9FAFA` |
| `bg.error` | red/100 `#FEE2E2` | red/900 `#300C0C` |
| `bg.warning` | orange/100 `#FFEDD5` | orange/900 `#3B1106` |
| `bg.success` | green/100 `#DCFCE7` | green/900 `#042713` |
| `bg.info` | blue/100 `#DBEAFE` | blue/900 `#14204A` |

### Semantic Tokens — Text (`text.*`)
| Token | Light | Dark |
|-------|-------|------|
| `text.heading` | gray/800 `#19202B` | gray/50 `#F9FAFA` |
| `text.paragraph` | gray/600 `#4D5560` | gray/300 `#D2D4D7` |
| `text.subtle` | gray/400 `#A9ADB2` | gray/500 `#797F88` |
| `text.inverted` | gray/50 `#F9FAFA` | gray/800 `#19202B` |
| `text.error` | red/700 `#991919` | red/700 `#991919` |
| `text.warning` | orange/700 `#92310A` | orange/700 `#92310A` |
| `text.success` | green/700 `#116932` | green/700 `#116932` |
| `text.info` | blue/700 `#173DA6` | blue/700 `#173DA6` |

### Semantic Tokens — Border (`border.*`)
| Token | Value |
|-------|-------|
| `border.default` | gray/400 (light) / gray/700 (dark) |
| `border.subtle` | gray/200 / gray/800 |
| `border.muted` | gray/100 / gray/900 |
| `border.emphasized` | gray/500 / gray/600 |
| `border.inverted` | gray/900 / gray/100 |
| `border.error` | red/500 `#EF4444` |
| `border.warning` | orange/500 `#F97316` |
| `border.success` | green/500 `#22C55E` |
| `border.info` | blue/500 `#3B82F6` |

### Semantic Tokens — Primary / Brand (`primary.*`)
| Token | Value |
|-------|-------|
| `primary.solid` | brand/500 `#FA2F93` |
| `primary.fg` | brand/600 `#EB1775` |
| `primary.onSolid` | gray/0 `#FFFFFF` |
| `primary.subtle` | brand/50 `#FEF1F8` |
| `primary.muted` | brand/100 `#FEE5F3` |
| `primary.emphasized` | brand/200 `#FFCBE9` |
| `primary.focusRing` | brand/300 `#FFA1D5` |

### Semantic Tokens — States
Each state (info, success, warning, error) follows this shape:
- `{state}.solid` — background for solid buttons/badges
- `{state}.subtle` — light background for alerts/badges
- `{state}.fg` — text/icon color
- `{state}.onSolid` — text on solid background (always white)
- `{state}.focusRing` — outline color
- `{state}.emphasized` — hover/selected background

### Spacing Scale (gap/padding)
`none=0`, `xs=2px`, `sm=4px`, `md=8px`, `lg=12px`, `xl=16px`, `2xl=20px`, `3xl=24px`, `4xl=40px`

### Border Radius
`none=0`, `xs=2px`, `sm=4px`, `md=8px (default)`, `lg=12px`, `xl=16px`, `2xl=20px`, `3xl=24px`, `full=9999px`

### Font Sizes
`xs=10px`, `sm=12px`, `md=14px (default)`, `lg=16px`, `xl=18px`, `2xl=20px`, `3xl=24px`, `4xl=32px`, `5xl=40px`, `6xl=48px`, `7xl=60px`

---

## File Structure

```
retriever-app/
├── theme/
│   └── index.ts           ← Fonte da verdade dos tokens (NEVER edit without reason)
├── app/
│   ├── providers.tsx       ← ChakraProvider + ColorModeProvider
│   ├── layout.tsx          ← Root layout
│   └── ...
├── components/
│   └── ui/                ← Componentes base usando tokens RETRIEVER
└── .agent/
    ├── rules/             ← Este arquivo
    └── workflows/         ← Prompts salvos
```

---

## Component Coding Conventions

### Always use semantic tokens:
```tsx
<Box
  bg="bg.surface"
  borderWidth="1px"
  borderColor="border.default"
  rounded="md"
  p="lg"
>
  <Text color="text.heading" fontSize="lg" fontWeight="bold">Title</Text>
  <Text color="text.paragraph" fontSize="md">Body text</Text>
</Box>
```

### Button patterns:
```tsx
// Primary
<Button bg="primary.solid" color="primary.onSolid" _hover={{ bg: "primary.fg" }}>
  Action
</Button>

// Ghost
<Button variant="ghost" color="text.heading" _hover={{ bg: "bg.subtle" }}>
  Cancel
</Button>
```

### State/feedback patterns:
```tsx
// Alert/Toast com estado
<Box bg="error.subtle" borderWidth="1px" borderColor="border.error" rounded="md" p="md">
  <Text color="text.error" fontWeight="medium">Mensagem de erro</Text>
</Box>
```

---

## Restrictions

1. **Do NOT use Tailwind CSS** — this project uses Chakra UI only.
2. **Do NOT use arbitrary hex values** — always reference a token.
3. **Do NOT edit `theme/index.ts`** without explicit user instruction.
4. **Do NOT use `extendTheme`** — Chakra UI v3 uses `createSystem()`.
5. **Always import from `@chakra-ui/react`** — avoid sub-package imports.
6. **All components must work in both light and dark mode** using semantic tokens.
