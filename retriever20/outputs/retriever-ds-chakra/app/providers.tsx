"use client";

/**
 * RETRIEVER 2.6 — ChakraProvider
 *
 * Envolve a aplicação com o sistema de design RETRIEVER.
 * Inclui suporte a dark/light mode via next-themes.
 */

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "../theme";

type ColorModeProviderProps = {
  children: React.ReactNode;
};

// ─────────────────────────────────────────────────────────────────────────────
// COLOR MODE PROVIDER (next-themes + Chakra)
// ─────────────────────────────────────────────────────────────────────────────

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP PROVIDER
// ─────────────────────────────────────────────────────────────────────────────

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ColorModeProvider>
      <ChakraProvider value={system}>
        {children}
      </ChakraProvider>
    </ColorModeProvider>
  );
}
