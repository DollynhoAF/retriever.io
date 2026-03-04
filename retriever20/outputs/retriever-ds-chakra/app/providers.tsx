"use client";

/**
 * RETRIEVER 2.6 — ChakraProvider
 *
 * Envolve a aplicação com o sistema de design RETRIEVER.
 * Inclui suporte a dark/light mode via next-themes.
 */

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { system } from "../theme";

// ─────────────────────────────────────────────────────────────────────────────
// COLOR MODE PROVIDER (next-themes + Chakra)
// ─────────────────────────────────────────────────────────────────────────────

export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      {...props}
    />
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
