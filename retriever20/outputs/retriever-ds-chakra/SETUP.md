# RETRIEVER 2.6 — Setup com Chakra UI v3

> Stack: **Next.js 14 (App Router)** · **Chakra UI v3** · **next-themes** · **pnpm**
> Single Source of Truth baseada nas variáveis do Figma RETRIEVER 2.6

---

## Arquitetura de Tokens

```
Figma Variables                Chakra UI v3
─────────────────────────────────────────────────────────────
--Foundations (cores)    →  tokens.colors.*          (primitivos)
--Sizing (units/radii)   →  tokens.spacing / radii   (primitivos)
--Typography             →  tokens.fonts/fontSizes    (primitivos)
--Semantic               →  semanticTokens.colors.*  (aliases c/ dark mode)
```

**Regra de ouro:** nos componentes, use sempre `semanticTokens` (ex: `bg="bg.surface"`, `color="text.heading"`). Nunca use os primitivos (`gray.800`) diretamente.

---

## Pré-requisitos

- Node.js v20+
- pnpm instalado: `npm install -g pnpm`

---

## Passo 1 — Criar o Projeto Next.js

```bash
pnpm create next-app@latest retriever-app \
  --typescript \
  --eslint \
  --app \
  --src-dir \
  --no-tailwind \
  --import-alias "@/*"
```

> **Edge Case:** `--no-tailwind` é essencial. Chakra UI v3 usa Panda CSS internamente e conflita com Tailwind.

---

## Passo 2 — Instalar Chakra UI v3 e dependências

```bash
cd retriever-app

pnpm add @chakra-ui/react @emotion/react next-themes
```

> **Edge Case:** Instalar `@chakra-ui/react@2.x` por engano é um erro comum.
> Verifique com `pnpm list @chakra-ui/react` — deve mostrar `3.x.x`.

---

## Passo 3 — Copiar os arquivos do Design System

```
Copie os arquivos gerados para dentro do seu projeto:

retriever-app/
├── theme/
│   └── index.ts          ← Tokens RETRIEVER (Foundation + Semantic)
└── app/
    ├── providers.tsx      ← ChakraProvider + ColorModeProvider
    ├── layout.tsx         ← Layout raiz com Montserrat + Providers
    └── page.tsx           ← Página de exemplo (opcional)
```

```bash
# Exemplo de cópia (ajuste os caminhos conforme sua estrutura)
cp theme/index.ts   retriever-app/theme/index.ts
cp app/providers.tsx retriever-app/app/providers.tsx
cp app/layout.tsx    retriever-app/app/layout.tsx
```

> **Edge Case:** Se seu projeto usa `src/`, os caminhos ficam `src/app/` e `src/theme/`.
> Ajuste os imports no `layout.tsx` e `providers.tsx` adequadamente.

---

## Passo 4 — (Opcional) Gerar tipagens dos tokens via CLI

O Chakra CLI gera tipos TypeScript para seus tokens, habilitando autocomplete no editor:

```bash
pnpm add -D @chakra-ui/cli

# Gera os tipos em node_modules/@chakra-ui/styled-system/dist/
pnpm chakra typegen ./theme/index.ts
```

> **Edge Case:** Erro `Cannot find module './theme/index.ts'` → verifique se o caminho está correto e se o arquivo exporta `export const system = createSystem(...)`.

---

## Passo 5 — Verificar a instalação

```bash
pnpm dev
```

Abra `http://localhost:3000` e verifique se:
- A fonte Montserrat está aplicada em toda a página
- O botão "Primary Action" aparece na cor brand `#FA2F93`
- Os badges de estado exibem as cores corretas (azul, verde, laranja, vermelho)
- A paleta brand vai do rosa claro ao escuro

---

## Como usar os tokens nos componentes

### Backgrounds

```tsx
// ✅ Correto — token semântico
<Box bg="bg.surface">...</Box>
<Box bg="bg.muted">...</Box>
<Box bg="bg.error">...</Box>

// ❌ Evitar — token primitivo diretamente
<Box bg="gray.0">...</Box>
```

### Textos

```tsx
<Heading color="text.heading">Título</Heading>
<Text color="text.paragraph">Parágrafo</Text>
<Text color="text.subtle">Legenda</Text>
<Text color="text.error">Mensagem de erro</Text>
```

### Bordas

```tsx
<Box borderWidth="default" borderColor="border.default">...</Box>
<Box borderWidth="focus"   borderColor="border.error">...</Box>
```

### Espaçamento (gap, padding)

```tsx
// Os aliases de espaçamento (xs, sm, md, lg...) estão disponíveis
<Stack gap="md">...</Stack>
<Box p="lg" px="xl">...</Box>
<Flex gap="2xl">...</Flex>
```

### Border radius

```tsx
<Box rounded="sm">...</Box>    {/* 4px  */}
<Box rounded="md">...</Box>    {/* 8px  */}
<Box rounded="lg">...</Box>    {/* 12px */}
<Box rounded="full">...</Box>  {/* 9999px */}
```

### Estados (info, success, warning, error)

```tsx
// Padrão: bg subtil + fg escuro + borda colorida
<Box
  bg="success.subtle"
  color="success.fg"
  borderWidth="default"
  borderColor="border.success"
  rounded="md"
  p="md"
>
  Operação concluída com sucesso!
</Box>
```

### Ações primárias (brand)

```tsx
<Button
  bg="primary.solid"
  color="primary.onSolid"
  _hover={{ bg: "primary.fg" }}
  _focus={{ outlineColor: "primary.focusRing" }}
>
  Salvar
</Button>
```

---

## Dark Mode

O dark mode está configurado via `next-themes`. Para ativar, adicione um botão de toggle:

```tsx
"use client";
import { useTheme } from "next-themes";
import { Button } from "@chakra-ui/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </Button>
  );
}
```

Os tokens semânticos mudam automaticamente — por exemplo, `bg.surface` passa de `gray.0` (#FFFFFF) para `gray.950` (#05070A) sem nenhuma lógica adicional.

---

## Estrutura de Arquivos Final

```
retriever-app/
├── theme/
│   └── index.ts           ← 🎨 Tokens RETRIEVER (fonte da verdade)
├── app/
│   ├── providers.tsx       ← ChakraProvider + ColorModeProvider
│   ├── layout.tsx          ← Root layout (Montserrat + Providers)
│   ├── page.tsx            ← Página principal
│   └── globals.css         ← (mínimo — apenas reset se necessário)
├── components/
│   └── ui/                 ← Seus componentes usando tokens RETRIEVER
└── package.json
```

---

## Próximos Passos

1. **Typegen** — rode `pnpm chakra typegen ./theme/index.ts` para autocomplete completo dos tokens no editor.

2. **Recipes / Variants** — defina variantes de componentes diretamente no theme usando `defineRecipe`:
   ```ts
   // Em theme/index.ts, dentro de defineConfig({ ... })
   recipes: {
     button: {
       base: { fontFamily: "sans", fontWeight: "medium" },
       variants: {
         variant: {
           primary: { bg: "primary.solid", color: "primary.onSolid" },
           ghost:   { bg: "transparent",   color: "text.heading"    },
         },
       },
     },
   }
   ```

3. **Sincronização contínua com Figma** — quando os tokens mudarem no Figma, atualize apenas o `theme/index.ts` e todos os componentes herdam as mudanças automaticamente.

4. **Storybook** — para documentar componentes com os tokens:
   ```bash
   pnpm dlx storybook@latest init
   ```
