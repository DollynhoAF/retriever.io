# RETRIEVER 2.6 — Design System Tokens

> Documentação gerada a partir das variáveis do arquivo Figma: **[RETRIEVER 2.6] - DSystem**
> Equipe: Vinicius.Falcão · Rodrigo.Brandão · Madu.Silva
> Fonte padrão: **Montserrat**
> Data: 2026-03-04

---

## Sumário

1. [--Foundations](#foundations) — Cores primitivas (82 tokens)
2. [--Sizing](#sizing) — Espaçamentos, raios, bordas (53 tokens)
3. [--Typography](#typography) — Tipografia (15 tokens)
4. [--Semantic](#semantic) — Tokens semânticos / aliases (69 tokens)

---

## --Foundations

Tokens primitivos de cor. Servem como base para os tokens semânticos. Não devem ser usados diretamente nos componentes.

### gray

| Token | Valor |
|-------|-------|
| `gray/0` | `#FFFFFF` |
| `gray/50` | `#F9FAFA` |
| `gray/100` | `#F1F1F2` |
| `gray/200` | `#E6E7E9` |
| `gray/300` | `#D2D4D7` |
| `gray/400` | `#A9ADB2` |
| `gray/500` | `#797F88` |
| `gray/600` | `#4D5560` |
| `gray/700` | `#2E3744` |
| `gray/800` | `#19202B` |
| `gray/900` | `#0C1015` |
| `gray/950` | `#05070A` |

### brand

Cor primária do sistema — rosa/magenta.

| Token | Valor |
|-------|-------|
| `brand/50` | `#FEF1F8` |
| `brand/100` | `#FEE5F3` |
| `brand/200` | `#FFCBE9` |
| `brand/300` | `#FFA1D5` |
| `brand/400` | `#FF67B7` |
| `brand/500` | `#FA2F93` |
| `brand/600` | `#EB1775` |
| `brand/700` | `#CC0A5B` |
| `brand/800` | `#A90B4B` |
| `brand/900` | `#560123` |

### purple

| Token | Valor |
|-------|-------|
| `purple/50` | `#F9F5FF` |
| `purple/100` | `#E5D9FE` |
| `purple/200` | `#D28DFD` |
| `purple/300` | `#A893FC` |
| `purple/400` | `#725DF4` |
| `purple/500` | `#5C29EF` |
| `purple/600` | `#4D10CF` |
| `purple/700` | `#460EB6` |
| `purple/800` | `#3D1195` |
| `purple/900` | `#200852` |

### blue

| Token | Valor |
|-------|-------|
| `blue/50` | `#EFF6FF` |
| `blue/100` | `#DBEAFE` |
| `blue/200` | `#BFDBFE` |
| `blue/300` | `#A3CFFF` |
| `blue/400` | `#60A5FA` |
| `blue/500` | `#3B82F6` |
| `blue/600` | `#2563EB` |
| `blue/700` | `#173DA6` |
| `blue/800` | `#1A3478` |
| `blue/900` | `#14204A` |

### green

| Token | Valor |
|-------|-------|
| `green/50` | `#F0FDF4` |
| `green/100` | `#DCFCE7` |
| `green/200` | `#BBF7D0` |
| `green/300` | `#86EFAC` |
| `green/400` | `#4ADE80` |
| `green/500` | `#22C55E` |
| `green/600` | `#16A34A` |
| `green/700` | `#116932` |
| `green/800` | `#124A28` |
| `green/900` | `#042713` |

### yellow

| Token | Valor |
|-------|-------|
| `yellow/50` | `#FEFCE8` |
| `yellow/100` | `#FEF9C3` |
| `yellow/200` | `#FEF08A` |
| `yellow/300` | `#FDE047` |
| `yellow/400` | `#FACC15` |
| `yellow/500` | `#EAB308` |
| `yellow/600` | `#CA8A04` |
| `yellow/700` | `#845209` |
| `yellow/800` | `#713F12` |
| `yellow/900` | `#422006` |

### orange

| Token | Valor |
|-------|-------|
| `orange/50` | `#FFF7ED` |
| `orange/100` | `#FFEDD5` |
| `orange/200` | `#FED7AA` |
| `orange/300` | `#FDBA74` |
| `orange/400` | `#FB923C` |
| `orange/500` | `#F97316` |
| `orange/600` | `#EA580C` |
| `orange/700` | `#92310A` |
| `orange/800` | `#6C2710` |
| `orange/900` | `#3B1106` |

### red

| Token | Valor |
|-------|-------|
| `red/50` | `#FEF2F2` |
| `red/100` | `#FEE2E2` |
| `red/200` | `#FECACA` |
| `red/300` | `#FCA5A5` |
| `red/400` | `#F87171` |
| `red/500` | `#EF4444` |
| `red/600` | `#DC2626` |
| `red/700` | `#991919` |
| `red/800` | `#511111` |
| `red/900` | `#300C0C` |

---

## --Sizing

Tokens de dimensão. Todos os aliases referenciam os valores da escala `units`.

### units

Escala de tamanhos em pixels.

| Token | Valor (px) |
|-------|-----------|
| `units/0` | `0` |
| `units/1` | `1` |
| `units/2` | `2` |
| `units/4` | `4` |
| `units/6` | `6` |
| `units/8` | `8` |
| `units/10` | `10` |
| `units/12` | `12` |
| `units/14` | `14` |
| `units/16` | `16` |
| `units/18` | `18` |
| `units/20` | `20` |
| `units/24` | `24` |
| `units/28` | `28` |
| `units/32` | `32` |
| `units/36` | `36` |
| `units/40` | `40` |
| `units/48` | `48` |
| `units/60` | `60` |
| `units/80` | `80` |
| `units/100` | `100` |
| `units/120` | `120` |
| `units/max` | `9999` |

### radii

Border-radius semânticos.

| Token | Alias | Valor (px) |
|-------|-------|-----------|
| `radii/none` | `units/0` | `0` |
| `radii/xs` | `units/2` | `2` |
| `radii/sm` | `units/4` | `4` |
| `radii/md` | `units/8` | `8` |
| `radii/lg` | `units/12` | `12` |
| `radii/xl` | `units/16` | `16` |
| `radii/2xl` | `units/20` | `20` |
| `radii/3xl` | `units/24` | `24` |
| `radii/max` | `units/max` | `9999` |

### gap

Espaçamentos de gap para layouts flex/grid.

| Token | Alias | Valor (px) |
|-------|-------|-----------|
| `gap/none` | `units/0` | `0` |
| `gap/xs` | `units/2` | `2` |
| `gap/sm` | `units/4` | `4` |
| `gap/md` | `units/8` | `8` |
| `gap/lg` | `units/12` | `12` |
| `gap/xl` | `units/16` | `16` |
| `gap/2xl` | `units/20` | `20` |
| `gap/3xl` | `units/24` | `24` |
| `gap/4xl` | `units/40` | `40` |

### padding

Espaçamentos de padding interno.

| Token | Alias | Valor (px) |
|-------|-------|-----------|
| `padding/none` | `units/0` | `0` |
| `padding/xs` | `units/2` | `2` |
| `padding/sm` | `units/4` | `4` |
| `padding/md` | `units/8` | `8` |
| `padding/lg` | `units/12` | `12` |
| `padding/xl` | `units/16` | `16` |
| `padding/2xl` | `units/20` | `20` |
| `padding/3xl` | `units/24` | `24` |
| `padding/4xl` | `units/40` | `40` |

### border

Espessuras de borda.

| Token | Alias | Valor (px) |
|-------|-------|-----------|
| `border/default` | `units/1` | `1` |
| `border/focus` | `units/2` | `2` |
| `border/strong` | `units/4` | `4` |

---

## --Typography

Tokens tipográficos. A fonte padrão do sistema é **Montserrat**.

### fontFamily

| Token | Valor |
|-------|-------|
| `fontFamily/Montserrat` | `Montserrat` |

### fontWeights

| Token | Valor |
|-------|-------|
| `fontWeights/Regular` | `400` |
| `fontWeights/Medium` | `500` |
| `fontWeights/Bold` | `700` |

### fontSize

Escala tipográfica com aliases para a escala `units`.

| Token | Alias | Valor (px) |
|-------|-------|-----------|
| `fontSize/xs` | `units/10` | `10` |
| `fontSize/sm` | `units/12` | `12` |
| `fontSize/md` | `units/14` | `14` |
| `fontSize/lg` | `units/16` | `16` |
| `fontSize/xl` | `units/18` | `18` |
| `fontSize/2xl` | `units/20` | `20` |
| `fontSize/3xl` | `units/24` | `24` |
| `fontSize/4xl` | `units/32` | `32` |
| `fontSize/5xl` | `units/40` | `40` |
| `fontSize/6xl` | `units/48` | `48` |
| `fontSize/7xl` | `units/60` | `60` |

---

## --Semantic

Tokens semânticos que referenciam os tokens primitivos de `--Foundations`. **Estes são os tokens que devem ser usados nos componentes.**

### bg

Cores de background para superfícies da interface.

| Token | Alias (Foundation) |
|-------|--------------------|
| `bg/surface` | `gray/0` |
| `bg/subtle` | `gray/50` |
| `bg/muted` | `gray/100` |
| `bg/canvas` | `gray/200` |
| `bg/emphasized` | `gray/300` |
| `bg/inverted` | `gray/700` |
| `bg/error` | `error/subtle` |
| `bg/warning` | `warning/subtle` |
| `bg/success` | `success/subtle` |
| `bg/info` | `info/subtle` |

### neutral

Cores neutras para elementos interativos e decorativos.

| Token | Alias (Foundation) |
|-------|--------------------|
| `neutral/onSolid` | `gray/0` |
| `neutral/subtle` | `gray/100` |
| `neutral/muted` | `gray/200` |
| `neutral/emphasized` | `gray/400` |
| `neutral/focusRing` | `gray/500` |
| `neutral/solid` | `gray/600` |
| `neutral/fg` | `gray/900` |

### border

Cores de borda e divisores.

| Token | Alias (Foundation) |
|-------|--------------------|
| `border/default` | `gray/400` |
| `border/subtle` | `gray/200` |
| `border/muted` | `gray/100` |
| `border/emphasized` | `gray/500` |
| `border/inverted` | `gray/900` |
| `border/error` | `red/500` |
| `border/warning` | `orange/500` |
| `border/success` | `green/500` |
| `border/info` | `blue/500` |

### text

Cores de texto para conteúdo tipográfico.

| Token | Alias (Foundation) |
|-------|--------------------|
| `text/heading` | `gray/800` |
| `text/paragraph` | `gray/600` |
| `text/subtle` | `gray/400` |
| `text/inverted` | `gray/50` |
| `text/error` | `red/700` |
| `text/warning` | `orange/700` |
| `text/success` | `green/700` |
| `text/info` | `blue/700` |

### primary

Cor de ação principal (brand). Usada em botões primários, links e elementos de destaque.

| Token | Alias (Foundation) |
|-------|--------------------|
| `primary/onSolid` | `gray/0` |
| `primary/subtle` | `brand/50` |
| `primary/muted` | `brand/100` |
| `primary/emphasized` | `brand/200` |
| `primary/focusRing` | `brand/300` |
| `primary/solid` | `brand/500` |
| `primary/fg` | `brand/600` |

### info

Estados informativos (azul).

| Token | Alias (Foundation) |
|-------|--------------------|
| `info/onSolid` | `gray/0` |
| `info/subtle` | `blue/100` |
| `info/muted` | `blue/200` |
| `info/emphasized` | `blue/300` |
| `info/focusRing` | `blue/400` |
| `info/solid` | `blue/600` |
| `info/fg` | `blue/700` |

### success

Estados de sucesso (verde).

| Token | Alias (Foundation) |
|-------|--------------------|
| `success/onSolid` | `gray/0` |
| `success/subtle` | `green/100` |
| `success/muted` | `green/200` |
| `success/emphasized` | `green/300` |
| `success/focusRing` | `green/400` |
| `success/solid` | `green/600` |
| `success/fg` | `green/700` |

### warning

Estados de aviso (laranja).

| Token | Alias (Foundation) |
|-------|--------------------|
| `warning/onSolid` | `gray/0` |
| `warning/subtle` | `orange/100` |
| `warning/muted` | `orange/200` |
| `warning/emphasized` | `orange/300` |
| `warning/focusRing` | `orange/400` |
| `warning/solid` | `orange/600` |
| `warning/fg` | `orange/800` |

### error

Estados de erro (vermelho).

| Token | Alias (Foundation) |
|-------|--------------------|
| `error/contrast` | `gray/0` |
| `error/subtle` | `red/100` |
| `error/muted` | `red/200` |
| `error/emphasized` | `red/300` |
| `error/focusRing` | `red/400` |
| `error/solid` | `red/600` |
| `error/fg` | `red/700` |

---

## Resumo de Contagem

| Coleção | Grupos | Total de Tokens |
|---------|--------|----------------|
| `--Foundations` | gray, brand, purple, blue, green, yellow, orange, red | **82** |
| `--Sizing` | units, radii, gap, padding, border | **53** |
| `--Typography` | fontFamily, fontWeights, fontSize | **15** |
| `--Semantic` | bg, neutral, border, text, primary, info, success, warning, error | **69** |
| **Total** | | **219** |

---

## Uso Recomendado

**Backgrounds:** use `bg/*` para superfícies de containers, cards, páginas e modais.

**Textos:** use `text/*` para hierarquia tipográfica. `text/heading` para títulos, `text/paragraph` para corpo, `text/subtle` para labels e captions.

**Bordas:** use `border/default` para separadores neutros. Variantes `border/error`, `border/success`, etc. para estados de validação.

**Ações:** use `primary/solid` como cor de fundo em botões primários, `primary/fg` para textos e ícones sobre fundos claros com brand color.

**Estados:** para feedback visual (erro, sucesso, aviso, info), use sempre os grupos semânticos correspondentes: `error/*`, `success/*`, `warning/*`, `info/*`.

**Espaçamento:** prefira `gap/*` e `padding/*` para consistência de layout. Use `radii/*` para border-radius dos componentes.

**Nunca use tokens de `--Foundations` diretamente em componentes** — use sempre os aliases `--Semantic` para garantir flexibilidade na manutenção do sistema.
