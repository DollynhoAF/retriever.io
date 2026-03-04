"use client";

import { Box, Flex, Text, Heading, Badge } from "@chakra-ui/react";
import { SectionCard, CodeSnippet } from "../_shared";

export default function BadgesPage() {
    return (
        <Box px="2xl" py="xl">
            <Box mb="xl">
                <Heading as="h1" fontSize="3xl" fontWeight="bold" color="text.heading"
                    fontFamily="var(--font-montserrat)" letterSpacing="0.24px" mb="xs">
                    Badges
                </Heading>
                <Text fontSize="sm" color="text.subtle" lineHeight="1.6">
                    Indicadores de status, categorias e tags da interface.
                </Text>
            </Box>

            <SectionCard title="Badges" subtitle="Indicadores de status, categorias e tags">
                <Box p="xl">
                    <Flex gap="md" wrap="wrap" mb="lg">
                        <Badge bg="bg.muted" color="text.paragraph" borderWidth="1px" borderColor="border.default" px="sm" py="xs" rounded="md">Default</Badge>
                        <Badge bg="info.subtle" color="info.fg" borderWidth="1px" borderColor="border.info" px="sm" py="xs" rounded="md">Info</Badge>
                        <Badge bg="success.subtle" color="success.fg" borderWidth="1px" borderColor="border.success" px="sm" py="xs" rounded="md">Success</Badge>
                        <Badge bg="warning.subtle" color="warning.fg" borderWidth="1px" borderColor="border.warning" px="sm" py="xs" rounded="md">Warning</Badge>
                        <Badge bg="error.subtle" color="error.fg" borderWidth="1px" borderColor="border.error" px="sm" py="xs" rounded="md">Critical</Badge>
                    </Flex>
                    <CodeSnippet code={`<Badge bg="info.subtle" color="info.fg"\n  borderWidth="1px" borderColor="border.info"\n  px="sm" py="xs" rounded="md">\n  Info\n</Badge>\n\n<Badge bg="success.subtle" color="success.fg"\n  borderWidth="1px" borderColor="border.success"\n  px="sm" py="xs" rounded="md">\n  Success\n</Badge>`} />
                </Box>
            </SectionCard>
        </Box>
    );
}
