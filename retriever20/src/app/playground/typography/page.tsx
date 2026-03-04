"use client";

import { Box, Flex, Grid, Text, Heading } from "@chakra-ui/react";
import { SectionCard, TableHead, TokenIcon, typographyScale } from "../_shared";

export default function TypographyPage() {
    return (
        <Box px="2xl" py="xl">
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Typography
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Escala tipográfica do sistema. Montserrat para headings, Inter para body.
                </Text>
            </Box>

            <SectionCard
                title="Escala tipográfica — tokens primitivos"
                subtitle="Usaremos 'fontSize' como prefixo para os tokens. Montserrat para headings, Inter para body."
            >
                <TableHead
                    columns={["TOKEN", "PIXELS", "REM", "PREVIEW"]}
                    templateColumns="200px 90px 110px 1fr"
                />
                {typographyScale.map(({ token, px, rem }, idx) => (
                    <Grid
                        key={token}
                        templateColumns="200px 90px 110px 1fr"
                        borderBottomWidth={idx < typographyScale.length - 1 ? "1px" : "0"}
                        borderColor="border.subtle"
                        minH="52px"
                        alignItems="center"
                    >
                        <Box px="md" py="sm" display="flex" alignItems="center">
                            <Flex align="center" gap="sm">
                                <TokenIcon />
                                <Text fontSize="sm" fontFamily="mono" color="primary.solid" fontWeight="medium">fontSize/{token}</Text>
                            </Flex>
                        </Box>
                        <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                            <Text fontSize="sm" color="text.paragraph">{px} px</Text>
                        </Box>
                        <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center">
                            <Text fontSize="sm" color="text.paragraph">{rem}</Text>
                        </Box>
                        <Box px="md" py="sm" borderLeftWidth="1px" borderColor="border.subtle" display="flex" alignItems="center" overflow="hidden">
                            <Text
                                fontSize={token}
                                color="text.paragraph"
                                fontWeight="medium"
                                fontFamily="var(--font-montserrat)"
                                lineHeight="1.2"
                                overflow="hidden"
                                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", display: "block" }}
                            >
                                RETRIEVER — Aa
                            </Text>
                        </Box>
                    </Grid>
                ))}
            </SectionCard>
        </Box>
    );
}
