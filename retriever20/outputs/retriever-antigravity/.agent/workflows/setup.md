# Workflow: /setup

Scaffold the RETRIEVER 2.6 Design System project from scratch.

## Instructions for the Agent

Execute the following steps IN ORDER. Stop after each step and confirm before continuing.

---

### Step 1 — Create Next.js project

```bash
pnpm create next-app@latest retriever-app \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --no-tailwind \
  --import-alias "@/*"
cd retriever-app
```

> Do NOT enable Tailwind. Chakra UI v3 uses Panda CSS internally.

---

### Step 2 — Install dependencies

```bash
pnpm add @chakra-ui/react @emotion/react next-themes
```

---

### Step 3 — Create the theme file

Create `src/theme/index.ts` with the full RETRIEVER 2.6 token system.

The file must use `createSystem(defaultConfig, defineConfig({ ... }))` from `@chakra-ui/react`.

Include ALL tokens as described in the Rules:
- `tokens.colors`: gray (12), brand (10), purple (10), blue (10), green (10), yellow (10), orange (10), red (10)
- `tokens.spacing`: full scale 0→120 + semantic aliases (none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- `tokens.radii`: none, xs, sm, md, lg, xl, 2xl, 3xl, full
- `tokens.borderWidths`: default=1px, focus=2px, strong=4px
- `tokens.fonts`: sans/heading/body = 'Montserrat, ui-sans-serif, system-ui, sans-serif'
- `tokens.fontSizes`: xs through 7xl
- `tokens.fontWeights`: regular=400, medium=500, bold=700
- `semanticTokens.colors`: ALL semantic tokens from the Rules file with light/dark conditions

Export as: `export const system = createSystem(defaultConfig, config)`

---

### Step 4 — Create providers

Create `src/app/providers.tsx`:
```tsx
"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "../theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
```

---

### Step 5 — Update root layout

Update `src/app/layout.tsx` to:
- Import `Montserrat` from `next/font/google` with weights 400, 500, 700
- Apply `variable="--font-montserrat"` to the html element
- Wrap children with `<Providers>`
- Add `suppressHydrationWarning` to `<html>`

---

### Step 6 — Verify

Run `pnpm dev` and confirm:
- Server starts without errors at http://localhost:3000
- No TypeScript errors
- No hydration warnings in the console

Report any errors found and fix them before finishing.
