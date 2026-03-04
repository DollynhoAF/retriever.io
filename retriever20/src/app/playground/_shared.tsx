"use client";

import { useState } from "react";
import { Box, Flex, Grid, Text, IconButton } from "@chakra-ui/react";

// ─── Icons ────────────────────────────────────────────────────────────────────

export const SunIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93 7.07-1.41-1.41M6.34 6.34 4.93 4.93" />
    </svg>
);

export const MoonIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6-6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

export const CopyIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

export const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

export const HamburgerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

// ─── Token Icon ───────────────────────────────────────────────────────────────

export const TokenIcon = () => (
    <Box
        w="20px" h="20px" flexShrink={0}
        borderWidth="1px" borderColor="border.subtle"
        rounded="xs" bg="bg.subtle"
        display="flex" alignItems="center" justifyContent="center"
    >
        <Text fontSize="8px" fontFamily="mono" color="primary.solid" fontWeight="bold" lineHeight="1">#</Text>
    </Box>
);

// ─── Section Card ─────────────────────────────────────────────────────────────

type SectionCardProps = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    cornerElement?: React.ReactNode;
};

export const SectionCard = ({ title, subtitle, children, cornerElement }: SectionCardProps) => (
    <Box borderWidth="1px" borderColor="border.subtle" rounded="lg" overflow="hidden">
        <Box px="md" pt="md" pb="sm" borderBottomWidth="1px" borderColor="border.subtle" bg="bg.subtle">
            <Flex justify="space-between" align="flex-start">
                <Box>
                    <Text fontSize="sm" fontWeight="semibold" color="text.heading" fontFamily="var(--font-montserrat)">{title}</Text>
                    {subtitle && <Text fontSize="xs" color="text.subtle" mt="2px">{subtitle}</Text>}
                </Box>
                {cornerElement && <Box flexShrink={0} ml="md">{cornerElement}</Box>}
            </Flex>
        </Box>
        <Box overflowX="auto" w="100%">
            {children}
        </Box>
    </Box>
);

// ─── Table Head ───────────────────────────────────────────────────────────────

export const TableHead = ({ columns, templateColumns }: { columns: string[]; templateColumns: string }) => (
    <Grid templateColumns={templateColumns} bg="bg.muted">
        {columns.map((col, i) => (
            <Box key={i} px="md" py="sm" borderBottomWidth="1px" borderColor="border.subtle" borderLeftWidth={i > 0 ? "1px" : "0"}>
                <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">{col}</Text>
            </Box>
        ))}
    </Grid>
);

// ─── Code Snippet ─────────────────────────────────────────────────────────────

export const CodeSnippet = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <Box position="relative" bg="bg.muted" rounded="md" p="md" overflow="auto">
            <Text as="pre" fontSize="xs" color="text.paragraph" fontFamily="mono">{code}</Text>
            <IconButton
                aria-label="Copy code" size="sm"
                position="absolute" top="xs" right="xs"
                variant="ghost" color="text.subtle"
                onClick={handleCopy}
            >
                {copied ? <CheckIcon /> : <CopyIcon />}
            </IconButton>
        </Box>
    );
};

// ─── Semantic Token Card ──────────────────────────────────────────────────────

type SemanticToken = { token: string; value: string; primitive?: string; usage?: string };

export const SemanticTokenCard = ({
    title, subtitle, tokens, mode,
}: {
    title: string;
    subtitle: string;
    tokens: SemanticToken[];
    mode: "usage" | "primitive";
}) => (
    <SectionCard title={title} subtitle={subtitle}>
        <TableHead
            columns={mode === "usage" ? ["TOKEN", "VALOR", "EXEMPLO"] : ["TOKEN", "VALOR", "PRIMITIVO"]}
            templateColumns="1fr 90px 1fr"
        />
        {tokens.map(({ token, value, primitive, usage }, idx) => (
            <Grid
                key={token}
                templateColumns="1fr 90px 1fr"
                borderBottomWidth={idx < tokens.length - 1 ? "1px" : "0"}
                borderColor="border.subtle"
                minH="44px"
            >
                <Box px="md" py="sm" display="flex" alignItems="center">
                    <Flex align="center" gap="sm">
                        <TokenIcon />
                        <Text fontSize="sm" fontFamily="mono" color="primary.solid" fontWeight="medium">{token}</Text>
                    </Flex>
                </Box>
                <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                    <Text fontSize="sm" color="text.paragraph">{value}</Text>
                </Box>
                <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center" gap="sm">
                    {mode === "usage" ? (
                        <>
                            <Box w="20px" h="20px" rounded="xs" flexShrink={0} bg={token} borderWidth="1px" borderColor="border.subtle" />
                            <Text fontSize="xs" color="text.subtle">{usage}</Text>
                        </>
                    ) : (
                        <>
                            <TokenIcon />
                            <Text fontSize="sm" fontFamily="mono" color="text.subtle">{primitive}</Text>
                        </>
                    )}
                </Box>
            </Grid>
        ))}
    </SectionCard>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

export const colorPalettes: Record<string, number[]> = {
    gray:   [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    brand:  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    blue:   [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    green:  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    orange: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    red:    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
};

export const semanticTokenGroups = [
    {
        title: "bg — tokens semânticos",
        subtitle: "Background / Fundo dos elementos da interface",
        tokens: [
            { token: "bg.surface", value: "surface", usage: "Background principal da página" },
            { token: "bg.subtle",  value: "subtle",  usage: "Containers, cards e modais" },
            { token: "bg.muted",   value: "muted",   usage: "States secundários, hover fill" },
        ],
    },
    {
        title: "text — tokens semânticos",
        subtitle: "Tipografia e contraste de texto",
        tokens: [
            { token: "text.heading",   value: "heading",   usage: "Títulos H1 a H6 e ênfase máxima" },
            { token: "text.paragraph", value: "paragraph", usage: "Corpo do texto e labels normais" },
            { token: "text.subtle",    value: "subtle",    usage: "Auxiliar, caption e metadata" },
        ],
    },
    {
        title: "border — tokens semânticos",
        subtitle: "Cores de borda e divisores de interface",
        tokens: [
            { token: "border.default", value: "default", usage: "Divisores padrão e linhas" },
            { token: "border.subtle",  value: "subtle",  usage: "Bordas secundárias e contornos" },
        ],
    },
    {
        title: "primary — tokens semânticos",
        subtitle: "Cor de ação e identidade da marca",
        tokens: [
            { token: "primary.solid",   value: "solid",   usage: "Botões e active states" },
            { token: "primary.muted",   value: "muted",   usage: "Backgrounds de destaque suave" },
            { token: "primary.onSolid", value: "onSolid", usage: "Texto/ícone sobre primary.solid" },
        ],
    },
];

export const typographyScale = [
    { token: "xs",  px: 12, rem: "0.75rem"  },
    { token: "sm",  px: 14, rem: "0.875rem" },
    { token: "md",  px: 16, rem: "1rem"     },
    { token: "lg",  px: 18, rem: "1.125rem" },
    { token: "xl",  px: 20, rem: "1.25rem"  },
    { token: "2xl", px: 24, rem: "1.5rem"   },
    { token: "3xl", px: 30, rem: "1.875rem" },
    { token: "4xl", px: 36, rem: "2.25rem"  },
    { token: "5xl", px: 48, rem: "3rem"     },
    { token: "6xl", px: 60, rem: "3.75rem"  },
    { token: "7xl", px: 72, rem: "4.5rem"   },
];

export const spacingTokens = [
    { token: "units-none", px: 0,   rem: "0rem"      },
    { token: "units-1",    px: 1,   rem: "0.0625rem" },
    { token: "units-2",    px: 2,   rem: "0.125rem"  },
    { token: "units-4",    px: 4,   rem: "0.25rem"   },
    { token: "units-6",    px: 6,   rem: "0.375rem"  },
    { token: "units-8",    px: 8,   rem: "0.5rem"    },
    { token: "units-10",   px: 10,  rem: "0.625rem"  },
    { token: "units-12",   px: 12,  rem: "0.75rem"   },
    { token: "units-14",   px: 14,  rem: "0.875rem"  },
    { token: "units-16",   px: 16,  rem: "1rem"      },
    { token: "units-18",   px: 18,  rem: "1.125rem"  },
    { token: "units-20",   px: 20,  rem: "1.25rem"   },
    { token: "units-24",   px: 24,  rem: "1.5rem"    },
    { token: "units-28",   px: 28,  rem: "1.75rem"   },
    { token: "units-32",   px: 32,  rem: "2rem"      },
    { token: "units-36",   px: 36,  rem: "2.25rem"   },
    { token: "units-40",   px: 40,  rem: "2.5rem"    },
    { token: "units-48",   px: 48,  rem: "3rem"      },
    { token: "units-60",   px: 60,  rem: "3.75rem"   },
    { token: "units-80",   px: 80,  rem: "5rem"      },
    { token: "units-100",  px: 100, rem: "6.25rem"   },
    { token: "units-120",  px: 120, rem: "7.5rem"    },
];

export const radiiTokens = [
    { token: "radii-none", value: "0",    primitive: "units-none" },
    { token: "radii-xs",   value: "2",    primitive: "units-2"    },
    { token: "radii-sm",   value: "4",    primitive: "units-4"    },
    { token: "radii-md",   value: "8",    primitive: "units-8"    },
    { token: "radii-lg",   value: "12",   primitive: "units-12"   },
    { token: "radii-xl",   value: "16",   primitive: "units-16"   },
    { token: "radii-2xl",  value: "20",   primitive: "units-20"   },
    { token: "radii-3xl",  value: "24",   primitive: "units-24"   },
    { token: "radii-max",  value: "9999", primitive: "units-max"  },
];

export const gapTokens = [
    { token: "gap-none", value: "0",  primitive: "units-none" },
    { token: "gap-xs",   value: "2",  primitive: "units-2"    },
    { token: "gap-sm",   value: "4",  primitive: "units-4"    },
    { token: "gap-md",   value: "8",  primitive: "units-8"    },
    { token: "gap-lg",   value: "12", primitive: "units-12"   },
    { token: "gap-xl",   value: "16", primitive: "units-16"   },
    { token: "gap-2xl",  value: "20", primitive: "units-20"   },
    { token: "gap-3xl",  value: "24", primitive: "units-24"   },
    { token: "gap-4xl",  value: "40", primitive: "units-40"   },
];

export const paddingTokens = [
    { token: "padding-none", value: "0",  primitive: "units-none" },
    { token: "padding-xs",   value: "2",  primitive: "units-2"    },
    { token: "padding-sm",   value: "4",  primitive: "units-4"    },
    { token: "padding-md",   value: "8",  primitive: "units-8"    },
    { token: "padding-lg",   value: "12", primitive: "units-12"   },
    { token: "padding-xl",   value: "16", primitive: "units-16"   },
    { token: "padding-2xl",  value: "20", primitive: "units-20"   },
    { token: "padding-3xl",  value: "24", primitive: "units-24"   },
    { token: "padding-4xl",  value: "40", primitive: "units-40"   },
];

export const borderTokens = [
    { token: "border-default", value: "1", primitive: "units-1" },
    { token: "border-focus",   value: "2", primitive: "units-2" },
    { token: "border-strong",  value: "4", primitive: "units-4" },
];

// ─── Color hex values (primitives) ────────────────────────────────────────────

export const colorHexValues: Record<string, Record<number, string>> = {
    gray:   { 0: "#FFFFFF", 50: "#F9FAFA", 100: "#F1F1F2", 200: "#E6E7E9", 300: "#D2D4D7", 400: "#A9ADB2", 500: "#797F88", 600: "#4D5560", 700: "#2E3744", 800: "#19202B", 900: "#0C1015", 950: "#05070A" },
    brand:  { 50: "#FEF1F8", 100: "#FEE5F3", 200: "#FFCBE9", 300: "#FFA1D5", 400: "#FF67B7", 500: "#FA2F93", 600: "#EB1775", 700: "#CC0A5B", 800: "#A90B4B", 900: "#560123" },
    purple: { 50: "#F9F5FF", 100: "#E5D9FE", 200: "#D2BDFD", 300: "#A893FC", 400: "#725DF4", 500: "#5C29EF", 600: "#4D10CF", 700: "#460EB6", 800: "#3D1195", 900: "#200852" },
    blue:   { 50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#A3CFFF", 400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#173DA6", 800: "#1A3478", 900: "#14204A" },
    green:  { 50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC", 400: "#4ADE80", 500: "#22C55E", 600: "#16A34A", 700: "#116932", 800: "#124A28", 900: "#042713" },
    yellow: { 50: "#FEFCE8", 100: "#FEF9C3", 200: "#FEF08A", 300: "#FDE047", 400: "#FACC15", 500: "#EAB308", 600: "#CA8A04", 700: "#845209", 800: "#713F12", 900: "#422006" },
    orange: { 50: "#FFF7ED", 100: "#FFEDD5", 200: "#FED7AA", 300: "#FDBA74", 400: "#FB923C", 500: "#F97316", 600: "#EA580C", 700: "#92310A", 800: "#6C2710", 900: "#3B1106" },
    red:    { 50: "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA", 300: "#FCA5A5", 400: "#F87171", 500: "#EF4444", 600: "#DC2626", 700: "#991919", 800: "#511111", 900: "#300C0C" },
};

// ─── Semantic color groups (with resolved light/dark hex) ──────────────────────

export type SemanticColorToken = {
    token: string;
    lightHex: string;
    darkHex?: string;
    usage: string;
};

export type SemanticColorGroup = {
    group: string;
    tokens: SemanticColorToken[];
};

export const semanticColorGroups: SemanticColorGroup[] = [
    {
        group: "bg",
        tokens: [
            { token: "bg.surface",   lightHex: "#FFFFFF", darkHex: "#05070A", usage: "Background principal da página" },
            { token: "bg.subtle",    lightHex: "#F9FAFA", darkHex: "#0C1015", usage: "Containers, cards e modais" },
            { token: "bg.muted",     lightHex: "#F1F1F2", darkHex: "#19202B", usage: "States secundários, hover fill" },
            { token: "bg.canvas",    lightHex: "#E6E7E9", darkHex: "#2E3744", usage: "Canvas e áreas de layout" },
            { token: "bg.inverted",  lightHex: "#2E3744", darkHex: "#F9FAFA", usage: "Fundos invertidos (toasts, tooltips)" },
            { token: "bg.error",     lightHex: "#FEE2E2", darkHex: "#300C0C", usage: "Fundo de estados de erro" },
            { token: "bg.warning",   lightHex: "#FFEDD5", darkHex: "#3B1106", usage: "Fundo de estados de alerta" },
            { token: "bg.success",   lightHex: "#DCFCE7", darkHex: "#042713", usage: "Fundo de estados de sucesso" },
            { token: "bg.info",      lightHex: "#DBEAFE", darkHex: "#14204A", usage: "Fundo de estados informativos" },
        ],
    },
    {
        group: "text",
        tokens: [
            { token: "text.heading",   lightHex: "#19202B", darkHex: "#F9FAFA", usage: "Títulos H1–H6 e ênfase máxima" },
            { token: "text.paragraph", lightHex: "#4D5560", darkHex: "#D2D4D7", usage: "Corpo do texto e labels" },
            { token: "text.subtle",    lightHex: "#A9ADB2", darkHex: "#797F88", usage: "Auxiliar, caption e metadata" },
            { token: "text.inverted",  lightHex: "#F9FAFA", darkHex: "#19202B", usage: "Texto sobre fundos invertidos" },
            { token: "text.error",     lightHex: "#991919",                     usage: "Mensagens de erro" },
            { token: "text.warning",   lightHex: "#845209",                     usage: "Mensagens de alerta" },
            { token: "text.success",   lightHex: "#116932",                     usage: "Mensagens de sucesso" },
            { token: "text.info",      lightHex: "#173DA6",                     usage: "Mensagens informativas" },
        ],
    },
    {
        group: "border",
        tokens: [
            { token: "border.default",    lightHex: "#A9ADB2", darkHex: "#2E3744", usage: "Divisores padrão e linhas" },
            { token: "border.subtle",     lightHex: "#E6E7E9", darkHex: "#19202B", usage: "Bordas secundárias e contornos" },
            { token: "border.emphasized", lightHex: "#797F88", darkHex: "#4D5560", usage: "Bordas de destaque" },
            { token: "border.inverted",   lightHex: "#0C1015", darkHex: "#F1F1F2", usage: "Bordas sobre fundos invertidos" },
            { token: "border.error",      lightHex: "#EF4444",                     usage: "Bordas de campos com erro" },
            { token: "border.warning",    lightHex: "#F97316",                     usage: "Bordas com alerta" },
            { token: "border.success",    lightHex: "#22C55E",                     usage: "Bordas de campos válidos" },
            { token: "border.info",       lightHex: "#3B82F6",                     usage: "Bordas informativas" },
        ],
    },
    {
        group: "primary",
        tokens: [
            { token: "primary.subtle",      lightHex: "#FEF1F8", usage: "Background hover suave" },
            { token: "primary.muted",       lightHex: "#FEE5F3", usage: "Backgrounds de destaque suave" },
            { token: "primary.emphasized",  lightHex: "#FFCBE9", usage: "Seleções e highlights" },
            { token: "primary.focusRing",   lightHex: "#FFA1D5", usage: "Anel de foco dos elementos" },
            { token: "primary.solid",       lightHex: "#FA2F93", usage: "Botões e active states" },
            { token: "primary.fg",          lightHex: "#EB1775", usage: "Texto sobre backgrounds claros" },
            { token: "primary.onSolid",     lightHex: "#FFFFFF", usage: "Texto/ícone sobre primary.solid" },
        ],
    },
];
