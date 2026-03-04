"use client";

import { Box, Grid, Text, Heading } from "@chakra-ui/react";
import { SemanticTokenCard, semanticTokenGroups } from "../_shared";

export default function SemanticsPage() {
    return (
        <Box px={{ base: "md", md: "2xl" }} py={{ base: "lg", md: "xl" }}>
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Semantics
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Tokens semânticos mapeados sobre a paleta primitiva, adaptados por tema (light/dark).
                </Text>
            </Box>

            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="lg">
                {semanticTokenGroups.map((group) => (
                    <SemanticTokenCard
                        key={group.title}
                        title={group.title}
                        subtitle={group.subtitle}
                        tokens={group.tokens}
                        mode="usage"
                    />
                ))}
            </Grid>
        </Box>
    );
}
