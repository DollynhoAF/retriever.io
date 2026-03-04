"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "../theme";

type ColorModeProviderProps = {
    children: React.ReactNode;
};

export function ColorModeProvider({ children }: ColorModeProviderProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
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
