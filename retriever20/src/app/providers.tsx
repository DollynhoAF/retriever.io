"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { system } from "../theme";

export function ColorModeProvider(props: ThemeProviderProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
            {...props}
        />
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ColorModeProvider>
            <ChakraProvider value={system}>
                {children}
            </ChakraProvider>
        </ColorModeProvider>
    );
}
