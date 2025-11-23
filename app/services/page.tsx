"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Flex,
    Icon,
    Image,
    Button,
} from "@chakra-ui/react"
import { FaBoxOpen, FaHandHoldingUsd, FaTruck, FaLaptopCode } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function ServicesPage() {
    return (
        <Box minH="100vh" bg="gray.50" color="gray.800">
            <Navbar />

            <Box bg="teal.600" color="white" py={20}>
                <Container maxW="7xl" mx="auto">
                    <Heading size="4xl" mb={4}>Our Services</Heading>
                    <Text fontSize="xl" maxW="2xl" opacity={0.9}>
                        Comprehensive solutions designed to bridge the gap between informal retail and modern distribution.
                    </Text>
                </Container>
            </Box>

            <Container maxW="7xl" py={16} mx="auto">
                <Stack gap={24}>
                    <ServiceSection
                        icon={FaBoxOpen}
                        title="B2B E-commerce Catalog"
                        desc="Our digital catalog brings the wholesale market to the retailer's fingertips. We offer a wide range of FMCG products at competitive prices. Retailers can browse, compare, and order 24/7 without leaving their shops."
                        features={[
                            "Real-time inventory updates",
                            "Dynamic promotional pricing",
                            "Bulk ordering capabilities",
                            "Personalized product recommendations"
                        ]}
                    />
                    <ServiceSection
                        icon={FaHandHoldingUsd}
                        title="Integrated BNPL (Buy Now, Pay Later)"
                        desc="Liquidity is the biggest challenge for small retailers. Our embedded finance solution provides working capital exactly when it's needed. We use alternative data to assess creditworthiness and offer instant credit lines."
                        features={[
                            "Instant credit approval",
                            "Flexible repayment terms",
                            "No collateral required",
                            "Credit limit increases with good repayment history"
                        ]}
                        reversed
                    />
                    <ServiceSection
                        icon={FaTruck}
                        title="Digital Logistics & Fulfillment"
                        desc="We don't just take orders; we ensure they get delivered. Our logistics network is optimized for the unique challenges of the informal sector, ensuring last-mile delivery to even the most remote kiosks."
                        features={[
                            "Next-day delivery guarantee",
                            "Real-time order tracking",
                            "SMS delivery notifications",
                            "Optimized routing for lower costs"
                        ]}
                    />
                    <ServiceSection
                        icon={FaLaptopCode}
                        title="Distributor Admin Portal"
                        desc="For our distributor partners, we provide a command center to manage their entire operation. From inventory to fleet management, our admin portal gives you total control and visibility."
                        features={[
                            "Centralized order management",
                            "Real-time stock monitoring",
                            "Driver and fleet management",
                            "Comprehensive financial reporting"
                        ]}
                        reversed
                    />
                </Stack>
            </Container>

            <Box bg="orange.50" py={20}>
                <Container maxW="4xl" textAlign="center" mx="auto">
                    <Heading size="2xl" mb={6} color="teal.800">Ready to transform your business?</Heading>
                    <Text fontSize="xl" mb={8} color="gray.600">
                        Join thousands of retailers and distributors already using Wabaki.
                    </Text>
                    <Link href="/contact">
                        <Button size="xl" colorPalette="teal">Get Started Today</Button>
                    </Link>
                </Container>
            </Box>

            <Footer />
        </Box>
    )
}

function ServiceSection({ icon, title, desc, features, reversed = false }: { icon: any, title: string, desc: string, features: string[], reversed?: boolean }) {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} alignItems="center">
            <Box order={{ base: 2, md: reversed ? 1 : 2 }}>
                <Flex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    rounded="2xl"
                    bg="teal.100"
                    color="teal.600"
                    mb={6}
                >
                    <Icon as={icon} fontSize="3xl" />
                </Flex>
                <Heading size="2xl" mb={4} color="gray.800">{title}</Heading>
                <Text fontSize="lg" color="gray.600" mb={6} lineHeight="tall">
                    {desc}
                </Text>
                <Stack gap={3}>
                    {features.map((feature, index) => (
                        <Flex key={index} align="center" gap={3}>
                            <Box w={2} h={2} rounded="full" bg="orange.400" />
                            <Text color="gray.700" fontWeight="medium">{feature}</Text>
                        </Flex>
                    ))}
                </Stack>
            </Box>
            <Box
                order={{ base: 1, md: reversed ? 2 : 1 }}
                bg="gray.200"
                h="400px"
                rounded="3xl"
                position="relative"
                overflow="hidden"
            >
                {/* Placeholder for service image */}
                <Flex h="full" align="center" justify="center" bg="gray.100" color="gray.400">
                    <Icon as={icon} fontSize="9xl" opacity={0.2} />
                </Flex>
            </Box>
        </SimpleGrid>
    )
}
