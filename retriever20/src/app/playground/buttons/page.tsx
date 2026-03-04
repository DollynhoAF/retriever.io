"use client";

import { Box, Flex, Grid, Stack, Text, Heading } from "@chakra-ui/react";
import { SectionCard, TableHead, CodeSnippet } from "../_shared";

// ─── Pin icon (Figma asset) ───────────────────────────────────────────────────

const PinIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
);

// ─── Types & configs ─────────────────────────────────────────────────────────

type Tipo    = "Preenchido" | "Outline" | "Ghost";
type Estado  = "Default" | "Hover" | "Desabilitado";
type Tamanho = "XSmall" | "Small" | "Medium" | "Large";

const SIZE: Record<Tamanho, { px: string; py: string; rounded: string; fontSize: string; letterSpacing: string; gap: string; iconSize: number }> = {
    XSmall: { px: "8px",  py: "6px",  rounded: "6px",  fontSize: "12px", letterSpacing: "0.18px", gap: "4px", iconSize: 12 },
    Small:  { px: "12px", py: "8px",  rounded: "8px",  fontSize: "14px", letterSpacing: "0.21px", gap: "6px", iconSize: 14 },
    Medium: { px: "16px", py: "10px", rounded: "8px",  fontSize: "16px", letterSpacing: "0.24px", gap: "6px", iconSize: 16 },
    Large:  { px: "24px", py: "16px", rounded: "46px", fontSize: "18px", letterSpacing: "0.27px", gap: "6px", iconSize: 20 },
};

type StyleDef = { bg: string; color: string; borderWidth?: string; borderColor?: string };

const STYLE: Record<Tipo, Record<Estado, StyleDef>> = {
    Preenchido: {
        Default:      { bg: "primary.solid",     color: "primary.onSolid" },
        Hover:        { bg: "primary.fg",         color: "primary.onSolid" },
        Desabilitado: { bg: "primary.emphasized", color: "primary.onSolid" },
    },
    Outline: {
        Default:      { bg: "transparent", color: "text.paragraph", borderWidth: "1px", borderColor: "border.default" },
        Hover:        { bg: "gray.500",    color: "white" },
        Desabilitado: { bg: "gray.300",    color: "white" },
    },
    Ghost: {
        Default:      { bg: "transparent", color: "text.paragraph" },
        Hover:        { bg: "bg.muted",    color: "text.paragraph" },
        Desabilitado: { bg: "gray.200",    color: "text.subtle" },
    },
};

// ─── RButton component ────────────────────────────────────────────────────────

type RButtonProps = {
    tipo?: Tipo;
    tamanho?: Tamanho;
    estado?: Estado;
    iconEsq?: boolean;
    iconDir?: boolean;
    children?: React.ReactNode;
};

const RButton = ({
    tipo = "Preenchido",
    tamanho = "Medium",
    estado = "Default",
    iconEsq = false,
    iconDir = false,
    children = "Botão",
}: RButtonProps) => {
    const s  = SIZE[tamanho];
    const st = STYLE[tipo][estado];
    const hoverSt = STYLE[tipo].Hover;

    return (
        <Flex
            as="button"
            display="inline-flex"
            align="center"
            justify="center"
            gap={s.gap}
            px={s.px}
            py={s.py}
            rounded={s.rounded}
            bg={st.bg}
            color={st.color}
            borderWidth={st.borderWidth ?? "0"}
            borderColor={st.borderColor}
            borderStyle="solid"
            cursor={estado === "Desabilitado" ? "not-allowed" : "pointer"}
            userSelect="none"
            transition="background 0.15s, color 0.15s, border-color 0.15s"
            overflow={tamanho === "XSmall" ? "clip" : undefined}
            _hover={estado === "Default" ? { bg: hoverSt.bg, color: hoverSt.color, borderWidth: "0" } : {}}
            width="fit-content"
            flexShrink={0}
        >
            {iconEsq && <PinIcon size={s.iconSize} />}
            <Text
                fontSize={s.fontSize}
                fontWeight="bold"
                fontFamily="var(--font-montserrat)"
                letterSpacing={s.letterSpacing}
                lineHeight="1.5"
                color="inherit"
            >
                {children}
            </Text>
            {iconDir && <PinIcon size={s.iconSize} />}
        </Flex>
    );
};

// ─── Demo helpers ─────────────────────────────────────────────────────────────

const TIPOS:    Tipo[]    = ["Preenchido", "Outline", "Ghost"];
const TAMANHOS: Tamanho[] = ["XSmall", "Small", "Medium", "Large"];
const ESTADOS:  Estado[]  = ["Default", "Hover", "Desabilitado"];

const TIPO_LABEL: Record<Tipo, string> = {
    Preenchido: "Preenchido",
    Outline: "Outline",
    Ghost: "Ghost",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ButtonsPage() {
    return (
        <Box px={{ base: "md", md: "2xl" }} py={{ base: "lg", md: "xl" }}>

            {/* Header */}
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Buttons
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Componente de botão — variantes por tipo, tamanho e estado. Replicado do Figma RETRIEVER Design System.
                </Text>
            </Box>

            <Stack gap="xl">

                {/* ── Tipos × Tamanhos ── */}
                <SectionCard
                    title="Tipos e tamanhos"
                    subtitle="Combinação de tipo (Preenchido, Outline, Ghost) com os quatro tamanhos disponíveis."
                >
                    {/* header row */}
                    <Grid templateColumns="120px repeat(4, 1fr)" bg="bg.muted" borderBottomWidth="1px" borderColor="border.subtle">
                        <Box px="md" py="sm">
                            <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">TIPO</Text>
                        </Box>
                        {TAMANHOS.map(t => (
                            <Box key={t} px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">{t}</Text>
                            </Box>
                        ))}
                    </Grid>

                    {TIPOS.map((tipo, ti) => (
                        <Grid
                            key={tipo}
                            templateColumns="120px repeat(4, 1fr)"
                            borderBottomWidth={ti < TIPOS.length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="60px"
                            alignItems="center"
                        >
                            <Box px="md" py="md">
                                <Text fontSize="sm" fontWeight="medium" color="text.heading">{TIPO_LABEL[tipo]}</Text>
                            </Box>
                            {TAMANHOS.map(tamanho => (
                                <Box key={tamanho} px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                    <RButton tipo={tipo} tamanho={tamanho} />
                                </Box>
                            ))}
                        </Grid>
                    ))}
                </SectionCard>

                {/* ── Estados ── */}
                <SectionCard
                    title="Estados"
                    subtitle="Default, Hover e Desabilitado para cada tipo. Tamanho Medium."
                >
                    <Grid templateColumns="120px repeat(3, 1fr)" bg="bg.muted" borderBottomWidth="1px" borderColor="border.subtle">
                        <Box px="md" py="sm">
                            <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">TIPO</Text>
                        </Box>
                        {ESTADOS.map(e => (
                            <Box key={e} px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">{e}</Text>
                            </Box>
                        ))}
                    </Grid>

                    {TIPOS.map((tipo, ti) => (
                        <Grid
                            key={tipo}
                            templateColumns="120px repeat(3, 1fr)"
                            borderBottomWidth={ti < TIPOS.length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="60px"
                            alignItems="center"
                        >
                            <Box px="md" py="md">
                                <Text fontSize="sm" fontWeight="medium" color="text.heading">{TIPO_LABEL[tipo]}</Text>
                            </Box>
                            {ESTADOS.map(estado => (
                                <Box key={estado} px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                    <RButton tipo={tipo} estado={estado} tamanho="Medium" />
                                </Box>
                            ))}
                        </Grid>
                    ))}
                </SectionCard>

                {/* ── Com ícone ── */}
                <SectionCard
                    title="Com ícone"
                    subtitle="Ícone à esquerda e à direita, nos três tipos. Tamanho Small e Medium."
                >
                    <Grid templateColumns="120px repeat(4, 1fr)" bg="bg.muted" borderBottomWidth="1px" borderColor="border.subtle">
                        <Box px="md" py="sm">
                            <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">TIPO</Text>
                        </Box>
                        {["Ícone esq — SM", "Ícone dir — SM", "Ícone esq — MD", "Ícone dir — MD"].map(label => (
                            <Box key={label} px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">{label}</Text>
                            </Box>
                        ))}
                    </Grid>

                    {TIPOS.map((tipo, ti) => (
                        <Grid
                            key={tipo}
                            templateColumns="120px repeat(4, 1fr)"
                            borderBottomWidth={ti < TIPOS.length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="60px"
                            alignItems="center"
                        >
                            <Box px="md" py="md">
                                <Text fontSize="sm" fontWeight="medium" color="text.heading">{TIPO_LABEL[tipo]}</Text>
                            </Box>
                            <Box px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <RButton tipo={tipo} tamanho="Small" iconEsq />
                            </Box>
                            <Box px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <RButton tipo={tipo} tamanho="Small" iconDir />
                            </Box>
                            <Box px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <RButton tipo={tipo} tamanho="Medium" iconEsq />
                            </Box>
                            <Box px="md" py="md" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <RButton tipo={tipo} tamanho="Medium" iconDir />
                            </Box>
                        </Grid>
                    ))}
                </SectionCard>

                {/* ── Tokens ── */}
                <SectionCard
                    title="Tokens aplicados"
                    subtitle="Mapeamento de tokens semânticos por tipo e estado."
                >
                    <TableHead
                        columns={["TIPO / ESTADO", "BG TOKEN", "COLOR TOKEN", "BORDER TOKEN"]}
                        templateColumns="200px 1fr 1fr 1fr"
                    />
                    {[
                        { label: "Preenchido · Default",      bg: "primary.solid",     color: "primary.onSolid",  border: "—" },
                        { label: "Preenchido · Hover",        bg: "primary.fg",        color: "primary.onSolid",  border: "—" },
                        { label: "Preenchido · Desabilitado", bg: "primary.emphasized", color: "primary.onSolid", border: "—" },
                        { label: "Outline · Default",         bg: "transparent",       color: "text.paragraph",   border: "border.default" },
                        { label: "Outline · Hover",           bg: "gray.500",          color: "white",            border: "—" },
                        { label: "Outline · Desabilitado",    bg: "gray.300",          color: "white",            border: "—" },
                        { label: "Ghost · Default",           bg: "transparent",       color: "text.paragraph",   border: "—" },
                        { label: "Ghost · Hover",             bg: "bg.muted",          color: "text.paragraph",   border: "—" },
                        { label: "Ghost · Desabilitado",      bg: "gray.200",          color: "text.subtle",      border: "—" },
                    ].map(({ label, bg, color, border }, idx, arr) => (
                        <Grid
                            key={label}
                            templateColumns="200px 1fr 1fr 1fr"
                            borderBottomWidth={idx < arr.length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="44px"
                            alignItems="center"
                        >
                            <Box px="md" py="sm">
                                <Text fontSize="xs" color="text.subtle">{label}</Text>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontFamily="mono" color="primary.solid">{bg}</Text>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontFamily="mono" color="primary.solid">{color}</Text>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Text fontSize="xs" fontFamily="mono" color={border === "—" ? "text.subtle" : "primary.solid"}>{border}</Text>
                            </Box>
                        </Grid>
                    ))}
                </SectionCard>

                {/* ── Code ── */}
                <SectionCard title="Código" subtitle="Uso do componente RButton no projeto.">
                    <Box p="xl">
                        <CodeSnippet code={`// Tipos
<RButton tipo="Preenchido" tamanho="Medium">Botão</RButton>
<RButton tipo="Outline"    tamanho="Medium">Botão</RButton>
<RButton tipo="Ghost"      tamanho="Medium">Botão</RButton>

// Tamanhos
<RButton tamanho="XSmall">Botão</RButton>
<RButton tamanho="Small">Botão</RButton>
<RButton tamanho="Medium">Botão</RButton>
<RButton tamanho="Large">Botão</RButton>

// Estados
<RButton estado="Default">Botão</RButton>
<RButton estado="Hover">Botão</RButton>
<RButton estado="Desabilitado">Botão</RButton>

// Com ícone
<RButton iconEsq>Botão</RButton>
<RButton iconDir>Botão</RButton>`} />
                    </Box>
                </SectionCard>

            </Stack>
        </Box>
    );
}
