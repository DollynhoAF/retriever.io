import type { Config } from "tailwindcss";

/**
 * RETRIEVER 2.6 — Tailwind CSS Configuration
 * Mapeia as CSS Variables do Design System para as utilities do Tailwind.
 *
 * Estrutura de tokens:
 *  - color-*      → Foundations (primitivos, não usar direto em UI)
 *  - bg-*         → Backgrounds semânticos
 *  - text-*       → Cores de texto semânticas
 *  - border-color-* → Bordas semânticas
 *  - primary-*    → Cor de ação principal (brand)
 *  - [state]-*    → Estados: info, success, warning, error
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    // ──────────────────────────────────────────────────────────
    // CONTAINER
    // ──────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    // ──────────────────────────────────────────────────────────
    // EXTEND — Adiciona ao tema base do Tailwind
    // ──────────────────────────────────────────────────────────
    extend: {

      // ── COLORS ─────────────────────────────────────────────
      colors: {
        // Shadcn/UI aliases (usados pelos componentes Shadcn)
        background:  "var(--background)",
        foreground:  "var(--foreground)",
        border:      "var(--border)",
        input:       "var(--input)",
        ring:        "var(--ring)",

        card: {
          DEFAULT:    "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT:    "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT:    "var(--primary)",
          foreground: "var(--primary-foreground)",
          // Escala completa RETRIEVER
          "on-solid":   "var(--primary-on-solid)",
          subtle:       "var(--primary-subtle)",
          muted:        "var(--primary-muted)",
          emphasized:   "var(--primary-emphasized)",
          "focus-ring": "var(--primary-focus-ring)",
          solid:        "var(--primary-solid)",
          fg:           "var(--primary-fg)",
        },
        secondary: {
          DEFAULT:    "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT:    "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT:    "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT:    "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },

        // Tokens semânticos RETRIEVER
        bg: {
          surface:    "var(--bg-surface)",
          subtle:     "var(--bg-subtle)",
          muted:      "var(--bg-muted)",
          canvas:     "var(--bg-canvas)",
          emphasized: "var(--bg-emphasized)",
          inverted:   "var(--bg-inverted)",
          error:      "var(--bg-error)",
          warning:    "var(--bg-warning)",
          success:    "var(--bg-success)",
          info:       "var(--bg-info)",
        },

        neutral: {
          "on-solid":   "var(--neutral-on-solid)",
          subtle:       "var(--neutral-subtle)",
          muted:        "var(--neutral-muted)",
          emphasized:   "var(--neutral-emphasized)",
          "focus-ring": "var(--neutral-focus-ring)",
          solid:        "var(--neutral-solid)",
          fg:           "var(--neutral-fg)",
        },

        "border-color": {
          DEFAULT:    "var(--border-color-default)",
          subtle:     "var(--border-color-subtle)",
          muted:      "var(--border-color-muted)",
          emphasized: "var(--border-color-emphasized)",
          inverted:   "var(--border-color-inverted)",
          error:      "var(--border-color-error)",
          warning:    "var(--border-color-warning)",
          success:    "var(--border-color-success)",
          info:       "var(--border-color-info)",
        },

        text: {
          heading:   "var(--text-heading)",
          paragraph: "var(--text-paragraph)",
          subtle:    "var(--text-subtle)",
          inverted:  "var(--text-inverted)",
          error:     "var(--text-error)",
          warning:   "var(--text-warning)",
          success:   "var(--text-success)",
          info:      "var(--text-info)",
        },

        // Estados
        info: {
          "on-solid":   "var(--info-on-solid)",
          subtle:       "var(--info-subtle)",
          muted:        "var(--info-muted)",
          emphasized:   "var(--info-emphasized)",
          "focus-ring": "var(--info-focus-ring)",
          solid:        "var(--info-solid)",
          fg:           "var(--info-fg)",
        },
        success: {
          "on-solid":   "var(--success-on-solid)",
          subtle:       "var(--success-subtle)",
          muted:        "var(--success-muted)",
          emphasized:   "var(--success-emphasized)",
          "focus-ring": "var(--success-focus-ring)",
          solid:        "var(--success-solid)",
          fg:           "var(--success-fg)",
        },
        warning: {
          "on-solid":   "var(--warning-on-solid)",
          subtle:       "var(--warning-subtle)",
          muted:        "var(--warning-muted)",
          emphasized:   "var(--warning-emphasized)",
          "focus-ring": "var(--warning-focus-ring)",
          solid:        "var(--warning-solid)",
          fg:           "var(--warning-fg)",
        },
        error: {
          contrast:     "var(--error-contrast)",
          subtle:       "var(--error-subtle)",
          muted:        "var(--error-muted)",
          emphasized:   "var(--error-emphasized)",
          "focus-ring": "var(--error-focus-ring)",
          solid:        "var(--error-solid)",
          fg:           "var(--error-fg)",
        },

        // Tokens primitivos de cor (Foundation)
        // Prefira usar os tokens semânticos acima.
        gray: {
          0:   "var(--color-gray-0)",
          50:  "var(--color-gray-50)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
          950: "var(--color-gray-950)",
        },
        brand: {
          50:  "var(--color-brand-50)",
          100: "var(--color-brand-100)",
          200: "var(--color-brand-200)",
          300: "var(--color-brand-300)",
          400: "var(--color-brand-400)",
          500: "var(--color-brand-500)",
          600: "var(--color-brand-600)",
          700: "var(--color-brand-700)",
          800: "var(--color-brand-800)",
          900: "var(--color-brand-900)",
        },
      },

      // ── BORDER RADIUS ──────────────────────────────────────
      borderRadius: {
        none: "var(--radius-none)",
        xs:   "var(--radius-xs)",
        sm:   "var(--radius-sm)",
        md:   "var(--radius-md)",
        DEFAULT: "var(--radius)",   // = radius-md (Shadcn alias)
        lg:   "var(--radius-lg)",
        xl:   "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-max)",
      },

      // ── SPACING ────────────────────────────────────────────
      spacing: {
        "0":   "var(--size-0)",
        "1":   "var(--size-1)",
        "2":   "var(--size-2)",
        "4":   "var(--size-4)",
        "6":   "var(--size-6)",
        "8":   "var(--size-8)",
        "10":  "var(--size-10)",
        "12":  "var(--size-12)",
        "14":  "var(--size-14)",
        "16":  "var(--size-16)",
        "18":  "var(--size-18)",
        "20":  "var(--size-20)",
        "24":  "var(--size-24)",
        "28":  "var(--size-28)",
        "32":  "var(--size-32)",
        "36":  "var(--size-36)",
        "40":  "var(--size-40)",
        "48":  "var(--size-48)",
        "60":  "var(--size-60)",
        "80":  "var(--size-80)",
        "100": "var(--size-100)",
        "120": "var(--size-120)",
      },

      // ── FONT FAMILY ────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // ── FONT SIZE ──────────────────────────────────────────
      fontSize: {
        xs:   ["var(--font-size-xs)",  { lineHeight: "1.6" }],
        sm:   ["var(--font-size-sm)",  { lineHeight: "1.6" }],
        md:   ["var(--font-size-md)",  { lineHeight: "1.5" }],
        base: ["var(--font-size-md)",  { lineHeight: "1.5" }],
        lg:   ["var(--font-size-lg)",  { lineHeight: "1.5" }],
        xl:   ["var(--font-size-xl)",  { lineHeight: "1.4" }],
        "2xl": ["var(--font-size-2xl)", { lineHeight: "1.4" }],
        "3xl": ["var(--font-size-3xl)", { lineHeight: "1.3" }],
        "4xl": ["var(--font-size-4xl)", { lineHeight: "1.2" }],
        "5xl": ["var(--font-size-5xl)", { lineHeight: "1.1" }],
        "6xl": ["var(--font-size-6xl)", { lineHeight: "1.1" }],
        "7xl": ["var(--font-size-7xl)", { lineHeight: "1.0" }],
      },

      // ── FONT WEIGHT ────────────────────────────────────────
      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium:  "var(--font-weight-medium)",
        bold:    "var(--font-weight-bold)",
      },

      // ── BORDER WIDTH ───────────────────────────────────────
      borderWidth: {
        DEFAULT: "var(--border-width-default)",
        focus:   "var(--border-width-focus)",
        strong:  "var(--border-width-strong)",
      },

      // ── KEYFRAMES (Shadcn/UI animations) ──────────────────
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          from: { opacity: "1", transform: "translateY(0)" },
          to:   { opacity: "0", transform: "translateY(4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "fade-in":        "fade-in 0.15s ease-out",
        "fade-out":       "fade-out 0.15s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
