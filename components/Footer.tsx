"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Separator,
} from "@chakra-ui/react"
import Link from "next/link"

export default function Footer() {
    return (
        <Box bg="gray.100" py={12} borderTop="1px solid" borderColor="gray.200">
            <Container maxW="7xl" mx="auto">
                <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
                    <Box gridColumn={{ base: "span 1", md: "span 2" }}>
                        <Heading size="lg" color="teal.700" mb={4}>Wabaki</Heading>
                        <Text color="gray.600" maxW="sm">
                            Digitizing the informal retail sector in Africa.
                            Connecting distributors and retailers for a more efficient future.
                        </Text>
                    </Box>
                    <Stack gap={4}>
                        <Text fontWeight="bold" color="gray.800">Platform</Text>
                        <Link href="/features"><Text color="gray.600">Features</Text></Link>
                        <Link href="/services"><Text color="gray.600">Services</Text></Link>
                        <Link href="/pricing"><Text color="gray.600">Pricing</Text></Link>
                    </Stack>
                    <Stack gap={4}>
                        <Text fontWeight="bold" color="gray.800">Company</Text>
                        <Link href="/about"><Text color="gray.600">About Us</Text></Link>
                        <Link href="/careers"><Text color="gray.600">Careers</Text></Link>
                        <Link href="/contact"><Text color="gray.600">Contact</Text></Link>
                    </Stack>
                </SimpleGrid>
                <Separator my={8} borderColor="gray.300" />
                <Text textAlign="center" color="gray.500" fontSize="sm">
                    © {new Date().getFullYear()} Wabaki Distributors. All rights reserved.
                </Text>
            </Container>
        </Box>
    )
}
