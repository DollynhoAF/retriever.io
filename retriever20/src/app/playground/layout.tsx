"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { SunIcon, MoonIcon, HamburgerIcon } from "./_shared";

const TOPBAR_H = "56px";
const SIDEBAR_W = 240;
const MOBILE_BP = 768;

const navGroups = [
    {
        label: "Foundations",
        items: [
            { href: "/playground/colors",     label: "Colors"     },
            { href: "/playground/semantics",  label: "Semantics"  },
            { href: "/playground/typography", label: "Typography" },
            { href: "/playground/spacing",    label: "Spacing"    },
            { href: "/playground/borders",    label: "Borders"    },
        ],
    },
    {
        label: "Components",
        items: [
            { href: "/playground/buttons", label: "Buttons" },
            { href: "/playground/badges",  label: "Badges"  },
            { href: "/playground/cards",   label: "Cards"   },
        ],
    },
];

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < MOBILE_BP;
            setIsMobile(mobile);
            setOpen(!mobile);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => { setMounted(true); }, []);

    // Fecha sidebar ao navegar no mobile
    useEffect(() => {
        if (isMobile) setOpen(false);
    }, [pathname, isMobile]);

    const isDark = mounted && theme === "dark";

    return (
        <Box bg="bg.surface" color="text.heading" minH="100vh" fontFamily="var(--font-montserrat)">

            {/* ─── Backdrop mobile ─── */}
            {isMobile && open && (
                <Box
                    position="fixed" inset={0} zIndex={14}
                    bg="rgba(0,0,0,0.45)"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* ─── Top bar ─── */}
            <Box
                position="fixed" top="0" left="0" right="0" zIndex={20}
                h={TOPBAR_H} px="md"
                borderBottomWidth="1px" borderColor="border.subtle"
                bg="bg.surface"
                display="flex" alignItems="center"
            >
                <Flex align="center" gap="sm" w="full">

                    {/* Hamburger */}
                    <Box
                        as="button"
                        onClick={() => setOpen(!open)}
                        display="flex" alignItems="center" justifyContent="center"
                        w="32px" h="32px" rounded="sm"
                        color="text.subtle" bg="transparent" border="none" cursor="pointer"
                        _hover={{ bg: "bg.muted", color: "text.heading" }}
                        transition="all 0.1s"
                        flexShrink={0}
                    >
                        <HamburgerIcon />
                    </Box>

                    <Box w="1px" h="20px" bg="border.subtle" flexShrink={0} mx="xs" />

                    {/* Brand */}
                    <Text
                        fontSize="lg" fontWeight="bold" color="primary.solid"
                        fontFamily="var(--font-montserrat)" letterSpacing="0.24px"
                        flexShrink={0}
                    >
                        RETRIEVER
                    </Text>

                    {/* Oculto no mobile */}
                    {!isMobile && (
                        <>
                            <Box w="2px" h="20px" bg="border.default" flexShrink={0} />
                            <Flex align="center" gap="sm">
                                <Text fontSize="sm" fontWeight="medium" color="text.heading">Design System</Text>
                                <Box borderWidth="1px" borderColor="border.default" px="sm" py="2px" rounded="sm">
                                    <Text fontSize="xs" color="text.heading" fontFamily="mono">v2.6</Text>
                                </Box>
                            </Flex>
                        </>
                    )}

                    <Box flex={1} />

                    {/* Theme toggle — só ícone no mobile */}
                    <Button
                        size="sm" variant="outline"
                        borderColor="border.default" color="text.heading"
                        gap={isMobile ? "0" : "xs"}
                        px={isMobile ? "8px" : undefined}
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                    >
                        {isDark ? <SunIcon /> : <MoonIcon />}
                        {!isMobile && (isDark ? "Light Mode" : "Dark Mode")}
                    </Button>
                </Flex>
            </Box>

            {/* ─── Sidebar ─── */}
            <Box
                position="fixed"
                top={TOPBAR_H} left="0" bottom="0"
                w={`${SIDEBAR_W}px`}
                transform={open ? "translateX(0)" : `translateX(-${SIDEBAR_W}px)`}
                transition="transform 0.25s ease"
                zIndex={15}
                borderRightWidth="1px" borderColor="border.subtle"
                bg="bg.subtle"
                overflowY="auto"
                overflowX="hidden"
                py="md"
            >
                {navGroups.map((group) => (
                    <Box key={group.label} mb="lg">
                        <Box px="md" mb="xs" pt="sm">
                            <Text
                                fontSize="xs" fontWeight="bold" color="text.subtle"
                                textTransform="uppercase" letterSpacing="wider"
                            >
                                {group.label}
                            </Text>
                        </Box>
                        <Box px="sm">
                            {group.items.map(({ href, label }) => {
                                const isActive = pathname === href;
                                return (
                                    <Link key={href} href={href} style={{ textDecoration: "none", display: "block" }}>
                                        <Box
                                            px="sm" py="sm" rounded="md" mb="2px"
                                            bg={isActive ? "primary.muted" : "transparent"}
                                            color={isActive ? "primary.solid" : "text.paragraph"}
                                            _hover={{ bg: isActive ? "primary.muted" : "bg.muted" }}
                                            cursor="pointer"
                                            transition="background 0.1s"
                                        >
                                            <Text
                                                fontSize="sm"
                                                fontWeight={isActive ? "semibold" : "medium"}
                                                whiteSpace="nowrap"
                                            >
                                                {label}
                                            </Text>
                                        </Box>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* ─── Main content ─── */}
            <Box
                pt={TOPBAR_H}
                ml={!isMobile && open ? `${SIDEBAR_W}px` : "0"}
                transition="margin-left 0.25s ease"
                minH="100vh"
            >
                {children}
            </Box>

        </Box>
    );
}
