# Workflow: /new-component

Create a new component following the RETRIEVER 2.6 Design System standards.

## Usage

Type `/new-component` followed by a description. Examples:

```
/new-component A card for displaying user profile with avatar, name, role, and an action button
/new-component A notification banner that supports info, success, warning, and error variants
/new-component A data table with sortable columns, pagination, and row selection
```

---

## Instructions for the Agent

When this workflow is triggered with a description, follow these steps:

### Step 1 — Plan

Before writing any code, output a brief plan:
- Component name (PascalCase)
- Props interface
- Variants/states needed
- Which RETRIEVER tokens will be used

### Step 2 — Create the component file

Location: `src/components/ui/{ComponentName}/{ComponentName}.tsx`

Requirements:
- TypeScript with explicit prop types (no `any`)
- Props use semantic token names where relevant (e.g., `variant: "info" | "success" | "warning" | "error"`)
- All colors, spacing, radii via semantic tokens ONLY
- Works in light AND dark mode (no extra code needed if using semantic tokens)
- Include JSDoc comment with usage example

### Step 3 — Create the story/example file

Location: `src/components/ui/{ComponentName}/{ComponentName}.example.tsx`

A simple page that renders all variants of the component, for visual verification.

### Step 4 — Export

Add the component to `src/components/ui/index.ts`:
```ts
export { ComponentName } from './{ComponentName}/{ComponentName}';
```

### Step 5 — Verify

Run `pnpm tsc --noEmit` to confirm no TypeScript errors.
Report any issues and fix them.

---

## Token Usage Checklist

Before finishing, verify the component follows these rules:

- [ ] No hardcoded hex values
- [ ] No primitive tokens (gray.X, brand.X) used directly
- [ ] All semantic tokens match the RETRIEVER token table in the Rules
- [ ] Component renders correctly in dark mode (test by toggling `className="dark"` on `<html>`)
- [ ] Props are typed correctly with no `any`
- [ ] Spacing uses the semantic scale (xs, sm, md, lg, xl...)

---

## Component Template

```tsx
import { Box, type BoxProps } from "@chakra-ui/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Variant = "info" | "success" | "warning" | "error";

interface ComponentNameProps {
  variant?: Variant;
  // ... other props
}

// ─── Token Map ────────────────────────────────────────────────────────────────

const variantTokens: Record<Variant, { bg: string; fg: string; border: string }> = {
  info:    { bg: "bg.info",    fg: "text.info",    border: "border.info"    },
  success: { bg: "bg.success", fg: "text.success", border: "border.success" },
  warning: { bg: "bg.warning", fg: "text.warning", border: "border.warning" },
  error:   { bg: "bg.error",   fg: "text.error",   border: "border.error"   },
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * ComponentName — [description]
 *
 * @example
 * <ComponentName variant="success">Content</ComponentName>
 */
export function ComponentName({
  variant = "info",
  children,
  ...rest
}: ComponentNameProps) {
  const tokens = variantTokens[variant];

  return (
    <Box
      bg={tokens.bg}
      color={tokens.fg}
      borderWidth="1px"
      borderColor={tokens.border}
      rounded="md"
      p="md"
      {...rest}
    >
      {children}
    </Box>
  );
}
```
