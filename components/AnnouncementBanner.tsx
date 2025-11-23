"use client"

import { Box, Container, Flex, Text, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { LuX } from "react-icons/lu"

export function AnnouncementBanner() {
    const [open, setOpen] = useState(true)

    if (!open) return null

    return (
        <Box bg="orange.500" color="white" py={2} position="relative" zIndex={20}>
            <Container maxW="7xl" mx="auto">
                <Flex justify="center" align="center" position="relative">
                    <Text fontWeight="medium" fontSize="sm">
                        🚀 Wabaki is coming soon! We are currently in beta.
                    </Text>
                    <IconButton
                        aria-label="Close announcement"
                        variant="ghost"
                        color="white"
                        size="xs"
                        position="absolute"
                        right={0}
                        _hover={{ bg: "white/20" }}
                        onClick={() => setOpen(false)}
                    >
                        <LuX />
                    </IconButton>
                </Flex>
            </Container>
        </Box>
    )
}
