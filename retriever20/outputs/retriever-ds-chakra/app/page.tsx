/**
 * Página de exemplo — demonstra o uso dos tokens RETRIEVER com Chakra UI v3.
 * Use esta página para verificar se o theme está aplicado corretamente.
 */

import {
  Box,
  Button,
  Badge,
  Text,
  Heading,
  Flex,
  Grid,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="bg.surface" minH="100vh" p="8">
      <Stack gap="8" maxW="800px" mx="auto">

        {/* Tipografia */}
        <Stack gap="2">
          <Heading
            fontSize="4xl"
            fontWeight="bold"
            color="text.heading"
          >
            RETRIEVER 2.6
          </Heading>
          <Text fontSize="lg" color="text.paragraph">
            Design System — Single Source of Truth
          </Text>
          <Text fontSize="sm" color="text.subtle">
            Tokens sincronizados com o Figma via Claude + Figma MCP
          </Text>
        </Stack>

        {/* Botões com tokens semânticos */}
        <Flex gap="md" flexWrap="wrap">
          <Button bg="primary.solid" color="primary.onSolid" _hover={{ bg: "primary.fg" }}>
            Primary Action
          </Button>
          <Button
            variant="outline"
            borderColor="border.default"
            color="text.heading"
            _hover={{ bg: "bg.subtle" }}
          >
            Secondary
          </Button>
          <Button bg="error.solid" color="error.contrast" _hover={{ bg: "error.fg" }}>
            Destructive
          </Button>
          <Button bg="success.solid" color="success.onSolid" _hover={{ bg: "success.fg" }}>
            Success
          </Button>
        </Flex>

        {/* Badges de estado */}
        <Flex gap="sm" flexWrap="wrap">
          <Badge bg="info.subtle" color="info.fg" borderWidth="default" borderColor="border.info">
            Info
          </Badge>
          <Badge bg="success.subtle" color="success.fg" borderWidth="default" borderColor="border.success">
            Success
          </Badge>
          <Badge bg="warning.subtle" color="warning.fg" borderWidth="default" borderColor="border.warning">
            Warning
          </Badge>
          <Badge bg="error.subtle" color="error.fg" borderWidth="default" borderColor="border.error">
            Error
          </Badge>
        </Flex>

        {/* Paleta de cores — Brand */}
        <Box>
          <Text fontSize="sm" fontWeight="medium" color="text.subtle" mb="sm">
            Paleta Brand
          </Text>
          <Grid templateColumns="repeat(10, 1fr)" gap="2">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <Box
                key={shade}
                h="10"
                rounded="sm"
                bg={`brand.${shade}`}
                title={`brand.${shade}`}
              />
            ))}
          </Grid>
        </Box>

        {/* Escala de cinzas */}
        <Box>
          <Text fontSize="sm" fontWeight="medium" color="text.subtle" mb="sm">
            Escala Gray
          </Text>
          <Grid templateColumns="repeat(12, 1fr)" gap="2">
            {[0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
              <Box
                key={shade}
                h="10"
                rounded="sm"
                bg={`gray.${shade}`}
                borderWidth="default"
                borderColor="border.subtle"
                title={`gray.${shade}`}
              />
            ))}
          </Grid>
        </Box>

        {/* Escala de espaçamentos */}
        <Box>
          <Text fontSize="sm" fontWeight="medium" color="text.subtle" mb="sm">
            Escala de Espaçamento
          </Text>
          <Flex gap="2" alignItems="flex-end">
            {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const).map((size) => (
              <Flex key={size} direction="column" align="center" gap="1">
                <Box
                  bg="primary.solid"
                  rounded="xs"
                  style={{ width: `var(--retriever-spacing-${size})`, height: `var(--retriever-spacing-${size})` }}
                />
                <Text fontSize="xs" color="text.subtle">{size}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>

      </Stack>
    </Box>
  );
}
