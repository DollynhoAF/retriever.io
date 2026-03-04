/**
 * RETRIEVER 2.6 — Chakra UI v3 Theme
 *
 * Single Source of Truth sincronizada com o Figma via Claude + Figma MCP.
 * Estrutura:
 *  tokens         → Primitivos (--Foundations e --Sizing do Figma)
 *  semanticTokens → Aliases contextuais (--Semantic do Figma), com suporte a dark mode
 *
 * Referência de token: use "{colors.brand.500}" para referenciar outros tokens.
 */

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DO SISTEMA
// ─────────────────────────────────────────────────────────────────────────────

const config = defineConfig({
  // Prefixo das CSS variables geradas pelo Chakra (ex: --retriever-colors-brand-500)
  cssVarsPrefix: "retriever",

  theme: {
    // ───────────────────────────────────────────────────────────────────────
    // TOKENS PRIMITIVOS
    // Correspondem às coleções --Foundations, --Sizing e --Typography do Figma.
    // NÃO use estes tokens diretamente nos componentes. Use semanticTokens.
    // ───────────────────────────────────────────────────────────────────────
    tokens: {

      // ── CORES ─────────────────────────────────────────────────────────────
      colors: {

        // --- Gray (12 escalas) ---
        gray: {
          0:   { value: "#FFFFFF" },
          50:  { value: "#F9FAFA" },
          100: { value: "#F1F1F2" },
          200: { value: "#E6E7E9" },
          300: { value: "#D2D4D7" },
          400: { value: "#A9ADB2" },
          500: { value: "#797F88" },
          600: { value: "#4D5560" },
          700: { value: "#2E3744" },
          800: { value: "#19202B" },
          900: { value: "#0C1015" },
          950: { value: "#05070A" },
        },

        // --- Brand / Primary (10 escalas) ---
        brand: {
          50:  { value: "#FEF1F8" },
          100: { value: "#FEE5F3" },
          200: { value: "#FFCBE9" },
          300: { value: "#FFA1D5" },
          400: { value: "#FF67B7" },
          500: { value: "#FA2F93" },
          600: { value: "#EB1775" },
          700: { value: "#CC0A5B" },
          800: { value: "#A90B4B" },
          900: { value: "#560123" },
        },

        // --- Purple (10 escalas) ---
        purple: {
          50:  { value: "#F9F5FF" },
          100: { value: "#E5D9FE" },
          200: { value: "#D2BDFD" },
          300: { value: "#A893FC" },
          400: { value: "#725DF4" },
          500: { value: "#5C29EF" },
          600: { value: "#4D10CF" },
          700: { value: "#460EB6" },
          800: { value: "#3D1195" },
          900: { value: "#200852" },
        },

        // --- Blue (10 escalas) ---
        blue: {
          50:  { value: "#EFF6FF" },
          100: { value: "#DBEAFE" },
          200: { value: "#BFDBFE" },
          300: { value: "#A3CFFF" },
          400: { value: "#60A5FA" },
          500: { value: "#3B82F6" },
          600: { value: "#2563EB" },
          700: { value: "#173DA6" },
          800: { value: "#1A3478" },
          900: { value: "#14204A" },
        },

        // --- Green (10 escalas) ---
        green: {
          50:  { value: "#F0FDF4" },
          100: { value: "#DCFCE7" },
          200: { value: "#BBF7D0" },
          300: { value: "#86EFAC" },
          400: { value: "#4ADE80" },
          500: { value: "#22C55E" },
          600: { value: "#16A34A" },
          700: { value: "#116932" },
          800: { value: "#124A28" },
          900: { value: "#042713" },
        },

        // --- Yellow (10 escalas) ---
        yellow: {
          50:  { value: "#FEFCE8" },
          100: { value: "#FEF9C3" },
          200: { value: "#FEF08A" },
          300: { value: "#FDE047" },
          400: { value: "#FACC15" },
          500: { value: "#EAB308" },
          600: { value: "#CA8A04" },
          700: { value: "#845209" },
          800: { value: "#713F12" },
          900: { value: "#422006" },
        },

        // --- Orange (10 escalas) ---
        orange: {
          50:  { value: "#FFF7ED" },
          100: { value: "#FFEDD5" },
          200: { value: "#FED7AA" },
          300: { value: "#FDBA74" },
          400: { value: "#FB923C" },
          500: { value: "#F97316" },
          600: { value: "#EA580C" },
          700: { value: "#92310A" },
          800: { value: "#6C2710" },
          900: { value: "#3B1106" },
        },

        // --- Red (10 escalas) ---
        red: {
          50:  { value: "#FEF2F2" },
          100: { value: "#FEE2E2" },
          200: { value: "#FECACA" },
          300: { value: "#FCA5A5" },
          400: { value: "#F87171" },
          500: { value: "#EF4444" },
          600: { value: "#DC2626" },
          700: { value: "#991919" },
          800: { value: "#511111" },
          900: { value: "#300C0C" },
        },
      },

      // ── ESPAÇAMENTO (baseado na escala units do Figma) ───────────────────
      spacing: {
        "0":   { value: "0px" },
        "1":   { value: "1px" },
        "2":   { value: "2px" },
        "4":   { value: "4px" },
        "6":   { value: "6px" },
        "8":   { value: "8px" },
        "10":  { value: "10px" },
        "12":  { value: "12px" },
        "14":  { value: "14px" },
        "16":  { value: "16px" },
        "18":  { value: "18px" },
        "20":  { value: "20px" },
        "24":  { value: "24px" },
        "28":  { value: "28px" },
        "32":  { value: "32px" },
        "36":  { value: "36px" },
        "40":  { value: "40px" },
        "48":  { value: "48px" },
        "60":  { value: "60px" },
        "80":  { value: "80px" },
        "100": { value: "100px" },
        "120": { value: "120px" },
        // Aliases semânticos de gap/padding do Figma
        none: { value: "0px"  },
        xs:   { value: "2px"  },
        sm:   { value: "4px"  },
        md:   { value: "8px"  },
        lg:   { value: "12px" },
        xl:   { value: "16px" },
        "2xl": { value: "20px" },
        "3xl": { value: "24px" },
        "4xl": { value: "40px" },
      },

      // ── BORDER RADIUS ────────────────────────────────────────────────────
      radii: {
        none: { value: "0px"    },
        xs:   { value: "2px"    },
        sm:   { value: "4px"    },
        md:   { value: "8px"    },
        lg:   { value: "12px"   },
        xl:   { value: "16px"   },
        "2xl": { value: "20px"  },
        "3xl": { value: "24px"  },
        full: { value: "9999px" },
      },

      // ── BORDER WIDTH ─────────────────────────────────────────────────────
      borderWidths: {
        default: { value: "1px" },
        focus:   { value: "2px" },
        strong:  { value: "4px" },
      },

      // ── TIPOGRAFIA ───────────────────────────────────────────────────────
      fonts: {
        sans: { value: "'Montserrat', ui-sans-serif, system-ui, sans-serif" },
        heading: { value: "'Montserrat', ui-sans-serif, system-ui, sans-serif" },
        body:    { value: "'Montserrat', ui-sans-serif, system-ui, sans-serif" },
      },

      fontSizes: {
        xs:   { value: "10px" },
        sm:   { value: "12px" },
        md:   { value: "14px" },
        lg:   { value: "16px" },
        xl:   { value: "18px" },
        "2xl": { value: "20px" },
        "3xl": { value: "24px" },
        "4xl": { value: "32px" },
        "5xl": { value: "40px" },
        "6xl": { value: "48px" },
        "7xl": { value: "60px" },
      },

      fontWeights: {
        regular: { value: "400" },
        medium:  { value: "500" },
        bold:    { value: "700" },
        // Aliases Chakra
        normal:     { value: "400" },
        semibold:   { value: "500" },
      },
    },

    // ───────────────────────────────────────────────────────────────────────
    // TOKENS SEMÂNTICOS
    // Correspondem à coleção --Semantic do Figma.
    // Use ESTES tokens nos componentes. Suportam light e dark mode.
    // Referência: { base: "<valor-light>", _dark: "<valor-dark>" }
    // ───────────────────────────────────────────────────────────────────────
    semanticTokens: {
      colors: {

        // ── Backgrounds ──────────────────────────────────────────────────
        "bg.surface": {
          value: { base: "{colors.gray.0}",   _dark: "{colors.gray.950}" },
        },
        "bg.subtle": {
          value: { base: "{colors.gray.50}",  _dark: "{colors.gray.900}" },
        },
        "bg.muted": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
        },
        "bg.canvas": {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
        },
        "bg.emphasized": {
          value: { base: "{colors.gray.300}", _dark: "{colors.gray.600}" },
        },
        "bg.inverted": {
          value: { base: "{colors.gray.700}", _dark: "{colors.gray.50}" },
        },
        "bg.error": {
          value: { base: "{colors.red.100}",    _dark: "{colors.red.900}" },
        },
        "bg.warning": {
          value: { base: "{colors.orange.100}", _dark: "{colors.orange.900}" },
        },
        "bg.success": {
          value: { base: "{colors.green.100}",  _dark: "{colors.green.900}" },
        },
        "bg.info": {
          value: { base: "{colors.blue.100}",   _dark: "{colors.blue.900}" },
        },

        // ── Neutral ───────────────────────────────────────────────────────
        "neutral.onSolid": {
          value: { base: "{colors.gray.0}",   _dark: "{colors.gray.900}" },
        },
        "neutral.subtle": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
        },
        "neutral.muted": {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.700}" },
        },
        "neutral.emphasized": {
          value: { base: "{colors.gray.400}", _dark: "{colors.gray.500}" },
        },
        "neutral.focusRing": {
          value: { base: "{colors.gray.500}", _dark: "{colors.gray.400}" },
        },
        "neutral.solid": {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.200}" },
        },
        "neutral.fg": {
          value: { base: "{colors.gray.900}", _dark: "{colors.gray.0}" },
        },

        // ── Border ────────────────────────────────────────────────────────
        "border.default": {
          value: { base: "{colors.gray.400}", _dark: "{colors.gray.700}" },
        },
        "border.subtle": {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.800}" },
        },
        "border.muted": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.900}" },
        },
        "border.emphasized": {
          value: { base: "{colors.gray.500}", _dark: "{colors.gray.600}" },
        },
        "border.inverted": {
          value: { base: "{colors.gray.900}", _dark: "{colors.gray.100}" },
        },
        "border.error":   { value: "{colors.red.500}"    },
        "border.warning": { value: "{colors.orange.500}" },
        "border.success": { value: "{colors.green.500}"  },
        "border.info":    { value: "{colors.blue.500}"   },

        // ── Text ──────────────────────────────────────────────────────────
        "text.heading": {
          value: { base: "{colors.gray.800}", _dark: "{colors.gray.50}" },
        },
        "text.paragraph": {
          value: { base: "{colors.gray.600}", _dark: "{colors.gray.300}" },
        },
        "text.subtle": {
          value: { base: "{colors.gray.400}", _dark: "{colors.gray.500}" },
        },
        "text.inverted": {
          value: { base: "{colors.gray.50}",  _dark: "{colors.gray.800}" },
        },
        "text.error":   { value: "{colors.red.700}"    },
        "text.warning": { value: "{colors.orange.700}" },
        "text.success": { value: "{colors.green.700}"  },
        "text.info":    { value: "{colors.blue.700}"   },

        // ── Primary (Brand) ───────────────────────────────────────────────
        "primary.onSolid":  { value: "{colors.gray.0}"    },
        "primary.subtle":   { value: "{colors.brand.50}"  },
        "primary.muted":    { value: "{colors.brand.100}" },
        "primary.emphasized": { value: "{colors.brand.200}" },
        "primary.focusRing": { value: "{colors.brand.300}" },
        "primary.solid":    { value: "{colors.brand.500}" },
        "primary.fg":       { value: "{colors.brand.600}" },

        // ── Info ──────────────────────────────────────────────────────────
        "info.onSolid":   { value: "{colors.gray.0}"   },
        "info.subtle":    { value: "{colors.blue.100}" },
        "info.muted":     { value: "{colors.blue.200}" },
        "info.emphasized": { value: "{colors.blue.300}" },
        "info.focusRing": { value: "{colors.blue.400}" },
        "info.solid":     { value: "{colors.blue.600}" },
        "info.fg":        { value: "{colors.blue.700}" },

        // ── Success ───────────────────────────────────────────────────────
        "success.onSolid":   { value: "{colors.gray.0}"    },
        "success.subtle":    { value: "{colors.green.100}" },
        "success.muted":     { value: "{colors.green.200}" },
        "success.emphasized": { value: "{colors.green.300}" },
        "success.focusRing": { value: "{colors.green.400}" },
        "success.solid":     { value: "{colors.green.600}" },
        "success.fg":        { value: "{colors.green.700}" },

        // ── Warning ───────────────────────────────────────────────────────
        "warning.onSolid":   { value: "{colors.gray.0}"      },
        "warning.subtle":    { value: "{colors.orange.100}"  },
        "warning.muted":     { value: "{colors.orange.200}"  },
        "warning.emphasized": { value: "{colors.orange.300}" },
        "warning.focusRing": { value: "{colors.orange.400}"  },
        "warning.solid":     { value: "{colors.orange.600}"  },
        "warning.fg":        { value: "{colors.orange.800}"  },

        // ── Error ─────────────────────────────────────────────────────────
        "error.contrast":   { value: "{colors.gray.0}"  },
        "error.subtle":     { value: "{colors.red.100}" },
        "error.muted":      { value: "{colors.red.200}" },
        "error.emphasized": { value: "{colors.red.300}" },
        "error.focusRing":  { value: "{colors.red.400}" },
        "error.solid":      { value: "{colors.red.600}" },
        "error.fg":         { value: "{colors.red.700}" },

        // ── Aliases Chakra UI (usados pelos componentes internos do Chakra) ─
        // Garante compatibilidade com os componentes padrão do Chakra UI.
        bg:                { value: { base: "{colors.gray.0}",   _dark: "{colors.gray.950}" } },
        "chakra-body-text": { value: { base: "{colors.gray.800}", _dark: "{colors.gray.50}" } },
        "chakra-border-color": { value: { base: "{colors.gray.400}", _dark: "{colors.gray.700}" } },
        "chakra-placeholder-color": { value: { base: "{colors.gray.400}", _dark: "{colors.gray.500}" } },
      },

      // ── Radii semânticos ────────────────────────────────────────────────
      radii: {
        "component.sm": { value: "{radii.sm}" },
        "component.md": { value: "{radii.md}" },
        "component.lg": { value: "{radii.lg}" },
      },
    },
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// SISTEMA CHAKRA — exportado e usado no ChakraProvider
// ─────────────────────────────────────────────────────────────────────────────

export const system = createSystem(defaultConfig, config);
