"use client";

import { Box, Grid, Stack, Text, Heading } from "@chakra-ui/react";
import { SectionCard } from "../_shared";

export default function BordersPage() {
    return (
        <Box px="2xl" py="xl">
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Borders
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Espessuras de borda disponíveis: default (1px), focus (2px) e strong (4px).
                </Text>
            </Box>

            <SectionCard
                title="Border widths — tokens"
                subtitle="Espessuras de borda disponíveis: default (1px), focus (2px) e strong (4px)"
            >
                <Grid templateColumns="repeat(3, 1fr)" gap="lg" p="xl">
                    <Stack gap="sm" align="center">
                        <Box p="lg" rounded="md" borderWidth="1px" borderColor="primary.solid" w="full" textAlign="center">
                            <Text fontFamily="mono" fontSize="sm" color="text.heading">1px — default</Text>
                        </Box>
                        <Text fontSize="xs" fontFamily="mono" color="text.subtle">border-default</Text>
                    </Stack>
                    <Stack gap="sm" align="center">
                        <Box
                            p="lg" rounded="md" w="full" textAlign="center"
                            borderWidth="1px" borderColor="primary.solid"
                            outline="2px solid" outlineColor="primary.solid" outlineOffset="2px"
                        >
                            <Text fontFamily="mono" fontSize="sm" color="text.heading">2px — focus</Text>
                        </Box>
                        <Text fontSize="xs" fontFamily="mono" color="text.subtle">border-focus (outline)</Text>
                    </Stack>
                    <Stack gap="sm" align="center">
                        <Box p="lg" rounded="md" borderLeftWidth="4px" borderColor="primary.solid" bg="primary.muted" w="full" textAlign="center">
                            <Text fontFamily="mono" fontSize="sm" color="text.heading">4px — strong</Text>
                        </Box>
                        <Text fontSize="xs" fontFamily="mono" color="text.subtle">border-strong</Text>
                    </Stack>
                </Grid>
            </SectionCard>
        </Box>
    );
}
