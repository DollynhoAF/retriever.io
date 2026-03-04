# RETRIEVER 2.6 — Setup do Design System

> Stack: **Next.js 14 (App Router)** · **Shadcn/UI** · **Tailwind CSS** · **pnpm**
> Single Source of Truth baseada nas variáveis do Figma RETRIEVER 2.6

---

## Pré-requisitos

- Node.js v20+
- pnpm (`npm install -g pnpm`)

---

## Passo 1 — Criar o Projeto Next.js

```bash
pnpm create next-app@latest retriever-app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

> **Edge Case:** Se o `pnpm create` travar, rode `pnpm store prune` e tente novamente.

---

## Passo 2 — Entrar na pasta e instalar dependências base

```bash
cd retriever-app

# Dependências de produção
pnpm add class-variance-authority clsx tailwind-merge

# Dependências de desenvolvimento
pnpm add -D tailwindcss-animate @types/node
```

> **Edge Case:** Conflito de versão do Tailwind → garanta `tailwindcss@^3.4.0` no `package.json`.

---

## Passo 3 — Inicializar o Shadcn/UI

```bash
pnpm dlx shadcn@latest init
```

Quando solicitado, escolha:
- Style: **Default**
- Base color: **Slate** (será sobrescrito pelos nossos tokens)
- CSS variables: **Yes**

> **Edge Case:** Erro `Cannot find module 'tailwindcss/resolveConfig'` → atualize o Tailwind: `pnpm add -D tailwindcss@latest`.

---

## Passo 4 — Substituir os arquivos de configuração

Copie os arquivos gerados para o projeto:

```bash
# Substitua o globals.css gerado pelo Shadcn
cp globals.css src/app/globals.css

# Substitua o tailwind.config.ts gerado pelo Next.js
cp tailwind.config.ts tailwind.config.ts

# Já foi criado pelo Shadcn init, mas você pode sobrescrever se necessário
cp components.json components.json
```

> **Edge Case:** O `shadcn init` pode ter criado um `globals.css` diferente. Ao substituir, verifique se as diretivas `@tailwind base/components/utilities` estão no topo do arquivo.

---

## Passo 5 — Configurar a fonte Montserrat

No arquivo `src/app/layout.tsx`, importe e aplique a fonte:

```tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "RETRIEVER App",
  description: "Design System RETRIEVER 2.6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

> **Edge Case:** A fonte não renderiza → certifique-se de que `variable: "--font-sans"` corresponde à variável no `globals.css`.

---

## Passo 6 — Adicionar componentes Shadcn

```bash
# Adicione os componentes que precisar
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add alert

# Ou adicione todos de uma vez
pnpm dlx shadcn@latest add --all
```

> **Edge Case:** Erro de importação do Radix → rode `pnpm install` após adicionar componentes.

---

## Passo 7 — Verificar o setup

Crie um arquivo de teste rápido `src/app/page.tsx`:

```tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-surface p-12 space-y-8">

      {/* Tipografia */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-text-heading">
          RETRIEVER 2.6
        </h1>
        <p className="text-lg text-text-paragraph">
          Design System — Single Source of Truth
        </p>
        <p className="text-sm text-text-subtle">
          Tokens sincronizados com o Figma via Claude + Figma MCP
        </p>
      </div>

      {/* Botões com tokens semânticos */}
      <div className="flex gap-md flex-wrap">
        <Button className="bg-primary-solid text-primary-on-solid hover:bg-primary-fg">
          Primary Action
        </Button>
        <Button variant="outline" className="border-border-color text-text-heading">
          Secondary
        </Button>
        <Button className="bg-error-solid text-error-contrast">
          Destructive
        </Button>
        <Button className="bg-success-solid text-success-on-solid">
          Success
        </Button>
      </div>

      {/* Badges de estado */}
      <div className="flex gap-sm flex-wrap">
        <Badge className="bg-info-subtle text-info-fg border-border-color-info">
          Info
        </Badge>
        <Badge className="bg-success-subtle text-success-fg border-border-color-success">
          Success
        </Badge>
        <Badge className="bg-warning-subtle text-warning-fg border-border-color-warning">
          Warning
        </Badge>
        <Badge className="bg-error-subtle text-error-fg border-border-color-error">
          Error
        </Badge>
      </div>

      {/* Paleta de cores */}
      <div className="grid grid-cols-10 gap-2">
        {[50,100,200,300,400,500,600,700,800,900].map((shade) => (
          <div
            key={shade}
            className="h-10 rounded-sm"
            style={{ backgroundColor: `var(--color-brand-${shade})` }}
            title={`brand/${shade}`}
          />
        ))}
      </div>

    </main>
  );
}
```

```bash
pnpm dev
```

Abra `http://localhost:3000` e verifique se:
- A fonte Montserrat está aplicada
- O botão Primary está na cor brand `#FA2F93`
- Os badges de estado exibem as cores corretas

---

## Estrutura de Arquivos Recomendada

```
src/
├── app/
│   ├── globals.css          ← Tokens CSS Variables (RETRIEVER)
│   ├── layout.tsx           ← Montserrat + dark mode provider
│   └── page.tsx
├── components/
│   ├── ui/                  ← Componentes Shadcn (auto-gerados)
│   └── [seu-componente]/    ← Componentes customizados
├── lib/
│   └── utils.ts             ← cn() utility (Shadcn)
└── hooks/
    └── use-theme.ts         ← Hook para dark/light mode
tailwind.config.ts           ← Tokens mapeados para Tailwind
components.json              ← Shadcn config
```

---

## Regras de Uso dos Tokens

| Situação | Token a usar | Exemplo Tailwind |
|----------|-------------|-----------------|
| Fundo de página | `bg-surface` | `bg-bg-surface` |
| Fundo de card | `bg-subtle` | `bg-bg-subtle` |
| Título principal | `text-heading` | `text-text-heading` |
| Texto de corpo | `text-paragraph` | `text-text-paragraph` |
| Label / caption | `text-subtle` | `text-text-subtle` |
| Botão primário | `primary-solid` | `bg-primary-solid` |
| Borda neutra | `border-color-default` | `border-border-color` |
| Estado de erro | `error-*` | `bg-error-subtle text-error-fg` |
| Espaçamento | `gap/padding-*` | `gap-md p-lg` |
| Border radius | `radius-*` | `rounded-md rounded-lg` |

**Regra de ouro:** nunca use tokens de `gray/*`, `brand/*` etc. diretamente em componentes. Use sempre os tokens semânticos (`bg-*`, `text-*`, `primary-*`, etc.).

---

## Próximos Passos

1. **Dark Mode** — Adicione um `ThemeProvider` usando `next-themes`:
   ```bash
   pnpm add next-themes
   ```

2. **Tokens.json** — Para exportar os tokens em formato Style Dictionary (multi-plataforma):
   ```bash
   # Solicite ao Claude para gerar o tokens.json a partir do globals.css
   ```

3. **Storybook** — Para documentar os componentes com os tokens aplicados:
   ```bash
   pnpm dlx storybook@latest init
   ```

4. **Sincronização contínua com Figma** — Sempre que os tokens do Figma forem atualizados, regenere o `globals.css` com o Claude + Figma MCP.
