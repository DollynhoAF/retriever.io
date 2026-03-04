"use client";

import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { SectionCard, CodeSnippet } from "../_shared";

export default function CardsPage() {
    return (
        <Box px={{ base: "md", md: "2xl" }} py={{ base: "lg", md: "xl" }}>
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Cards
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Estrutura padrão de card e layout de conteúdo da interface.
                </Text>
            </Box>

            <SectionCard title="Card Layout" subtitle="Estrutura padrão de card da interface">
                <Box p="xl">
                    <Box bg="bg.subtle" p="xl" rounded="lg" borderWidth="1px" borderColor="border.subtle" mb="md">
                        <Heading as="h3" fontSize="lg" color="text.heading" mb="sm" fontFamily="var(--font-montserrat)">
                            Design System Updates
                        </Heading>
                        <Text color="text.paragraph" mb="lg">
                            Novos tokens semânticos foram introduzidos no RETRIEVER 2.6. Revise as paletas de cores e variáveis de espaçamento para garantir conformidade em todos os componentes.
                        </Text>
                        <Button bg="primary.solid" color="primary.onSolid">Confirmar</Button>
                    </Box>
                    <CodeSnippet code={`<Box bg="bg.subtle" p="xl" rounded="lg"\n  borderWidth="1px" borderColor="border.subtle">\n  <Heading fontSize="lg" color="text.heading">Título</Heading>\n  <Text color="text.paragraph" mb="lg">Conteúdo</Text>\n  <Button bg="primary.solid" color="primary.onSolid">Ação</Button>\n</Box>`} />
                </Box>
            </SectionCard>
        </Box>
    );
}
