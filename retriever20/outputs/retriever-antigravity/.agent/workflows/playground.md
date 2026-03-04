# Workflow: /playground

Generate the RETRIEVER 2.6 Design System Playground at `/playground`.

This is an interactive documentation page that shows all design tokens and components live.

---

## Instructions for the Agent

Create the file `src/app/playground/page.tsx`.

The playground must have the following sections, each separated by a visual divider and labeled with a heading. All styling MUST use RETRIEVER semantic tokens only (no hex values, no arbitrary values).

---

## Section 1 — Header

A sticky top bar with:
- The text "RETRIEVER 2.6 — Design System Playground"
- A dark/light mode toggle button using `useTheme` from `next-themes`
- Background: `bg.surface`, border-bottom: `border.default`

```tsx
// Color mode toggle example
"use client";
import { useTheme } from "next-themes";
// ...
const { theme, setTheme } = useTheme();
<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  {theme === "dark" ? "Light" : "Dark"}
</Button>
```

---

## Section 2 — Color Palettes (Foundation Tokens)

Show ALL 8 color palettes as color swatches in a grid.

For each palette (gray, brand, purple, blue, green, yellow, orange, red):
- Section title = palette name
- A horizontal row of color boxes, one per shade
- Each box: `h="60px"`, `rounded="sm"`, shows the shade number and hex value on hover (tooltip or overlay)
- Below each box: the shade number (50, 100... 900)

Gray palette is special — show shades 0, 50, 100...950.

```tsx
const palettes = {
  gray:   [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  brand:  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  // ... all 8 palettes
};
```

Use `bg={`{paletteName}.{shade}`}` for each box.

---

## Section 3 — Semantic Color Tokens

Show each semantic group (bg, text, border, primary, info, success, warning, error) as a labeled table or card grid.

For each token:
- Token name: `bg="bg.subtle" color="text.heading"` (monospaced)
- Color swatch: small box with the actual color applied
- Description of when to use it

Example layout per row:
```
[color swatch] bg.surface   ←→  Background principal da página
```

---

## Section 4 — Typography Scale

Show all font sizes from `xs` to `7xl` as live text samples.

Each row:
- The text "RETRIEVER Design System — Aa" rendered at that font size
- Token name on the right: `fontSize/xl` with `color="text.subtle"`
- Font weight samples: Regular / Medium / Bold on the same row

---

## Section 5 — Spacing & Radius Scale

**Spacing:** Show visual blocks for each step (none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl).
Each block is a square whose width and height equal the spacing value, filled with `primary.solid`.

**Radii:** Show a rounded box for each radius token (none, xs, sm, md, lg, xl, 2xl, 3xl, full).
Each box is `w="60px" h="60px"` with `bg="primary.muted"` and `borderWidth="1px" borderColor="border.default"`.

---

## Section 6 — Components with Code Snippets

For each component, show:
1. The **live rendered** component
2. A **code snippet block** below it (use a `<Box as="pre">` with `bg="bg.muted" rounded="md" p="md" overflow="auto"`)
3. A **copy button** that copies the snippet to clipboard using `navigator.clipboard.writeText()`

Components to show:

### Buttons
- Primary: `bg="primary.solid" color="primary.onSolid"`
- Secondary/Ghost: `variant="ghost"`
- Destructive: `bg="error.solid" color="error.contrast"`
- Success: `bg="success.solid"`
- Warning: `bg="warning.solid"`
- Disabled state

### Badges
One badge for each state: default, info, success, warning, error.
Pattern: `bg="{state}.subtle" color="{state}.fg" borderWidth="1px" borderColor="border.{state}"`

### Alert/Feedback Cards
One card for each state showing:
- Colored left border
- Icon placeholder
- Title + description text
Pattern: `bg="bg.{state}" borderLeft="4px solid" borderColor="border.{state}"`

### Input Fields
- Default state
- Focus state (show `outline: 2px solid primary.focusRing`)
- Error state (red border + error message)

### Card
A standard card with:
- `bg="bg.subtle"`, `rounded="lg"`, `p="xl"`, `borderWidth="1px" borderColor="border.subtle"`
- Heading, paragraph, and a primary action button

---

## Section 7 — Border Widths

Show three boxes with borderWidth `default` (1px), `focus` (2px), and `strong` (4px).

---

## Technical Requirements

- The page must be a **Client Component** (`"use client"`) because it uses `useTheme` and clipboard API.
- All text must use `fontFamily="var(--font-montserrat)"` or inherit it from the layout.
- The page must look good in BOTH light and dark mode.
- Code snippets in the Component section must be accurate, copy-pasteable TypeScript/TSX.
- Use `Stack`, `Grid`, `Flex`, `Box`, `Text`, `Heading`, `Badge`, `Button` from `@chakra-ui/react`.
- Add a sticky "Back to top" button at the bottom right: `position="fixed" bottom="xl" right="xl"`.
- Navigation: add an anchor `<nav>` at the top with jump links to each section.

---

## Expected File Output

`src/app/playground/page.tsx` — a single complete file, no external dependencies beyond `@chakra-ui/react` and `next-themes`.

After creating the file, run `pnpm dev` and open `http://localhost:3000/playground` to verify it renders correctly in both light and dark mode. Take a screenshot and report any visual issues.
