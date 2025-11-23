"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Flex,
    Avatar,
    Card,
} from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
    return (
        <Box minH="100vh" bg="gray.50" color="gray.800">
            <Navbar />

            <Box bg="teal.600" color="white" py={20}>
                <Container maxW="7xl" mx="auto">
                    <Heading size="4xl" mb={4}>About Wabaki</Heading>
                    <Text fontSize="xl" maxW="2xl" opacity={0.9}>
                        Building the digital infrastructure for Africa's informal retail economy.
                    </Text>
                </Container>
            </Box>

            <Container maxW="7xl" py={16} mx="auto">
                <Stack gap={16}>
                    <Box>
                        <Heading size="2xl" mb={6} color="teal.800">Our Mission</Heading>
                        <Text fontSize="xl" color="gray.600" lineHeight="tall" maxW="4xl">
                            At Wabaki, we believe that the informal retail sector is the backbone of African economies.
                            Our mission is to empower the millions of small shop owners—the "corner shops"—with the
                            tools, technology, and capital they need to grow. By digitizing the supply chain, we
                            unlock efficiency for distributors and create opportunities for retailers.
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                        <StatBox value="5,000+" label="Retailers Onboarded" />
                        <StatBox value="$2M+" label="Credit Disbursed" />
                        <StatBox value="50+" label="Distributor Partners" />
                    </SimpleGrid>

                    <Box>
                        <Heading size="2xl" mb={8} color="teal.800">Leadership Team</Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                            <TeamMember
                                name="Kwame Mensah"
                                role="CEO & Co-Founder"
                                bio="Former supply chain executive with 15 years of experience in FMCG distribution across West Africa."
                            />
                            <TeamMember
                                name="Sarah Osei"
                                role="CTO & Co-Founder"
                                bio="Tech veteran who has built fintech solutions for unbanked populations in emerging markets."
                            />
                            <TeamMember
                                name="David Okafor"
                                role="Head of Operations"
                                bio="Logistics expert specializing in last-mile delivery challenges in urban African environments."
                            />
                        </SimpleGrid>
                    </Box>
                </Stack>
            </Container>

            <Footer />
        </Box>
    )
}

function StatBox({ value, label }: { value: string, label: string }) {
    return (
        <Box
            p={8}
            bg="white"
            rounded="xl"
            shadow="sm"
            borderTop="4px solid"
            borderColor="orange.400"
            textAlign="center"
        >
            <Text fontSize="4xl" fontWeight="bold" color="teal.700" mb={2}>{value}</Text>
            <Text color="gray.500" fontWeight="medium">{label}</Text>
        </Box>
    )
}

function TeamMember({ name, role, bio }: { name: string, role: string, bio: string }) {
    return (
        <Card.Root variant="elevated" shadow="md">
            <Card.Body gap={4} alignItems="center" textAlign="center">
                <Avatar.Root size="2xl" bg="teal.100" color="teal.700">
                    <Avatar.Fallback name={name} />
                </Avatar.Root>
                <Stack gap={1}>
                    <Card.Title fontSize="xl">{name}</Card.Title>
                    <Text color="orange.500" fontWeight="bold" fontSize="sm">{role}</Text>
                </Stack>
                <Card.Description>
                    {bio}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    )
}
