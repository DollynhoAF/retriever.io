"use client";

import { useState } from "react";
import { Box, Flex, Grid, Stack, Text, Heading } from "@chakra-ui/react";
import {
    SectionCard, TableHead, TokenIcon,
    colorPalettes, colorHexValues,
    semanticColorGroups, type SemanticColorGroup,
} from "../_shared";

// ─── Clickable primitive swatch ───────────────────────────────────────────────

const ClickableSwatch = ({ palette, shade }: { palette: string; shade: number }) => {
    const [copied, setCopied] = useState(false);
    const hex = colorHexValues[palette]?.[shade] ?? "";

    const handleCopy = async () => {
        if (!hex) return;
        await navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Stack
            align="center" gap="2px" cursor="pointer" onClick={handleCopy}
            title={`Copiar ${hex}`} userSelect="none"
        >
            <Box
                position="relative" h="36px" w="full" rounded="xs"
                bg={`${palette}.${shade}`}
                borderWidth={shade === 0 || shade === 50 ? "1px" : "0"}
                borderColor="border.subtle"
                overflow="hidden"
                transition="opacity 0.1s"
                _hover={{ opacity: 0.8 }}
            >
                {copied && (
                    <Box
                        position="absolute" inset={0}
                        bg="rgba(0,0,0,0.45)"
                        display="flex" alignItems="center" justifyContent="center"
                    >
                        <Text fontSize="10px" color="white" fontWeight="bold">✓</Text>
                    </Box>
                )}
            </Box>
            <Text fontSize="8px" color="text.subtle" fontFamily="mono" textAlign="center" lineHeight="1.2">{shade}</Text>
            <Text
                fontSize="7px" fontFamily="mono" textAlign="center" lineHeight="1.2"
                color={copied ? "primary.solid" : "text.subtle"}
                opacity={copied ? 1 : 0.65}
            >
                {hex}
            </Text>
        </Stack>
    );
};

// ─── Semantic hex swatch (copy on click) ──────────────────────────────────────

const HexSwatch = ({ hex }: { hex: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <Flex
            align="center" gap="xs" cursor="pointer"
            onClick={handleCopy} title={`Copiar ${hex}`}
            _hover={{ opacity: 0.75 }} transition="opacity 0.1s"
        >
            <Box
                w="18px" h="18px" rounded="xs" flexShrink={0}
                borderWidth="1px" borderColor="border.subtle"
                style={{ backgroundColor: hex }}
            />
            <Text fontSize="xs" fontFamily="mono" color={copied ? "primary.solid" : "text.subtle"}>
                {copied ? "copiado!" : hex}
            </Text>
        </Flex>
    );
};

// ─── Semantic color group table ───────────────────────────────────────────────

const SemanticColorTable = ({ group }: { group: SemanticColorGroup }) => {
    const groupLabel = group.group.charAt(0).toUpperCase() + group.group.slice(1);
    const hasThemed = group.tokens.some(t => t.darkHex);

    return (
        <SectionCard
            title={`${groupLabel} — tokens semânticos`}
            subtitle={`Tokens de cor para ${group.group}, adaptados ao tema ativo.`}
        >
            <TableHead
                columns={hasThemed ? ["TOKEN", "LIGHT", "DARK", "USO"] : ["TOKEN", "COR", "USO"]}
                templateColumns={hasThemed ? "1fr 160px 160px 1fr" : "1fr 160px 1fr"}
            />
            {group.tokens.map(({ token, lightHex, darkHex, usage }, idx) => (
                <Grid
                    key={token}
                    templateColumns={hasThemed ? "1fr 160px 160px 1fr" : "1fr 160px 1fr"}
                    borderBottomWidth={idx < group.tokens.length - 1 ? "1px" : "0"}
                    borderColor="border.subtle"
                    minH="44px"
                    alignItems="center"
                >
                    {/* TOKEN */}
                    <Box px="md" py="sm" display="flex" alignItems="center">
                        <Flex align="center" gap="sm">
                            <TokenIcon />
                            <Text fontSize="sm" fontFamily="mono" color="primary.solid" fontWeight="medium">{token}</Text>
                        </Flex>
                    </Box>

                    {/* LIGHT */}
                    <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                        <HexSwatch hex={lightHex} />
                    </Box>

                    {/* DARK (only if the group has themed tokens) */}
                    {hasThemed && (
                        <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                            <HexSwatch hex={darkHex ?? lightHex} />
                        </Box>
                    )}

                    {/* USO */}
                    <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                        <Text fontSize="xs" color="text.subtle">{usage}</Text>
                    </Box>
                </Grid>
            ))}
        </SectionCard>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ColorsPage() {
    return (
        <Box px="2xl" py="xl">

            {/* Header */}
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Colors
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Paletas primitivas e tokens semânticos de cor do sistema. Clique em qualquer swatch para copiar o hex.
                </Text>
            </Box>

            {/* ── Primitive palettes ── */}
            <Box mb="2xl">
                <SectionCard
                    title="Paletas de cores — tokens primitivos"
                    subtitle="Escala de cores base do sistema. Clique em um tom para copiar o valor hex."
                >
                    <Grid templateColumns="180px 1fr" bg="bg.muted" borderBottomWidth="1px" borderColor="border.subtle">
                        <Box px="md" py="sm">
                            <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">PALETA</Text>
                        </Box>
                        <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                            <Text fontSize="xs" fontWeight="semibold" color="text.subtle" textTransform="uppercase" letterSpacing="wider">TONS</Text>
                        </Box>
                    </Grid>

                    {Object.entries(colorPalettes).map(([name, shades], pi) => (
                        <Grid
                            key={name}
                            templateColumns="180px 1fr"
                            borderBottomWidth={pi < Object.keys(colorPalettes).length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="72px"
                        >
                            <Box px="md" py="sm" display="flex" alignItems="center">
                                <Flex align="center" gap="sm">
                                    <Box w="16px" h="16px" rounded="full" bg={`${name}.500`} flexShrink={0} />
                                    <Text fontSize="sm" fontWeight="medium" color="text.heading" textTransform="capitalize">{name}</Text>
                                </Flex>
                            </Box>
                            <Box px="sm" py="sm" borderLeftWidth="1px" borderColor="border.subtle">
                                <Grid templateColumns={`repeat(${shades.length}, 1fr)`} gap="xs" h="full">
                                    {shades.map((shade) => (
                                        <ClickableSwatch key={shade} palette={name} shade={shade} />
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    ))}
                </SectionCard>
            </Box>

            {/* ── Semantic colors ── */}
            <Box mb="xl">
                <Box mb="lg">
                    <Text fontSize="xl" fontWeight="semibold" color="text.heading" fontFamily="var(--font-montserrat)">
                        Cores semânticas
                    </Text>
                    <Text fontSize="sm" color="text.subtle" mt="xs">
                        Tokens semânticos mapeados sobre a paleta primitiva. Tokens com variação light/dark exibem ambos os valores.
                    </Text>
                </Box>
                <Stack gap="lg">
                    {semanticColorGroups.map((group) => (
                        <SemanticColorTable key={group.group} group={group} />
                    ))}
                </Stack>
            </Box>

        </Box>
    );
}
