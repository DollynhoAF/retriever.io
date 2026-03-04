"use client";

import { Box, Flex, Grid, Text, Heading } from "@chakra-ui/react";
import {
    SectionCard, TableHead, TokenIcon, SemanticTokenCard,
    spacingTokens, radiiTokens, gapTokens, paddingTokens, borderTokens,
} from "../_shared";

export default function SpacingPage() {
    return (
        <Box px={{ base: "md", md: "2xl" }} py={{ base: "lg", md: "xl" }}>
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Spacing
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Sistema de espaçamento baseado em unidades. 1 Unit = 1px = 0.0625rem.
                </Text>
            </Box>

            <Box mb="lg">
                <SectionCard
                    title="Base — tokens primitivos"
                    subtitle="Usaremos 'Units' como termo para referir-se ao espaçamento. 1 Unit = 1px = 0.0625rem"
                >
                    <TableHead
                        columns={["UNITS", "PIXELS", "REM", "EXEMPLO"]}
                        templateColumns="220px 100px 110px 1fr"
                    />
                    {spacingTokens.map(({ token, px, rem }, idx) => (
                        <Grid
                            key={token}
                            templateColumns="220px 100px 110px 1fr"
                            borderBottomWidth={idx < spacingTokens.length - 1 ? "1px" : "0"}
                            borderColor="border.subtle"
                            minH="44px"
                            alignItems="center"
                        >
                            <Box px="md" py="sm" display="flex" alignItems="center">
                                <Flex align="center" gap="sm">
                                    <TokenIcon />
                                    <Text fontSize="sm" fontFamily="mono" color="primary.solid" fontWeight="medium">{token}</Text>
                                </Flex>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <Text fontSize="sm" color="text.paragraph">{px} px</Text>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                <Text fontSize="sm" color="text.paragraph">{rem}</Text>
                            </Box>
                            <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                                {px > 0 && (
                                    <Box
                                        h="8px" rounded="1px" bg="primary.solid"
                                        style={{ width: `${Math.min(px * 3, 480)}px`, maxWidth: "100%" }}
                                    />
                                )}
                            </Box>
                        </Grid>
                    ))}
                </SectionCard>
            </Box>

            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="lg">
                <SemanticTokenCard
                    title="radii — tokens semânticos"
                    subtitle="Corner radius / Arredondamento de borda"
                    tokens={radiiTokens}
                    mode="primitive"
                />
                <SemanticTokenCard
                    title="gap — tokens semânticos"
                    subtitle="Distância vertical ou horizontal entre elementos"
                    tokens={gapTokens}
                    mode="primitive"
                />
                <SemanticTokenCard
                    title="padding — tokens semânticos"
                    subtitle="Distância entre itens e a extremidade do bloco"
                    tokens={paddingTokens}
                    mode="primitive"
                />
                <SemanticTokenCard
                    title="border — tokens semânticos"
                    subtitle="Espessuras de borda para elementos diversos"
                    tokens={borderTokens}
                    mode="primitive"
                />
            </Grid>
        </Box>
    );
}
