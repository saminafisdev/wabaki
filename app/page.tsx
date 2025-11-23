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
  Button,
  Card,
  Badge,
} from "@chakra-ui/react"
import { FaTruck, FaChartLine, FaMobileAlt, FaHandHoldingUsd, FaBoxOpen } from "react-icons/fa"
import { MdInventory, MdTrendingUp } from "react-icons/md"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function LandingPage() {
  return (
    <Box minH="100vh" bg="gray.50" color="gray.800">
      <Navbar />

      {/* Hero Section */}
      <Box bg="teal.600" color="white" pt={20} pb={32} position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1}
          bgImage="radial-gradient(circle at 20% 50%, white 0%, transparent 50%)" />
        <Container maxW="7xl" position="relative" mx="auto">
          <Stack gap={8} maxW="3xl">
            <Badge colorPalette="orange" variant="solid" size="lg" w="fit-content">
              Revolutionizing FMCG Distribution
            </Badge>
            <Heading size={{ base: "3xl", md: "6xl" }} fontWeight="extrabold" lineHeight="1.1">
              Empowering Accra's Retailers with <Text as="span" color="orange.300">Digital Supply Chain</Text> & Credit
            </Heading>
            <Text fontSize="xl" opacity={0.9} maxW="2xl">
              Wabaki connects distributors directly to corner shops and kiosks.
              Order inventory 24/7, get it delivered, and pay later with our integrated micro-financing.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap={4} pt={4}>
              <Link href="/contact">
                <Button size="xl" colorPalette="orange" variant="solid">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="xl" variant="outline" color="white" _hover={{ bg: "white/10" }}>
                  Learn More
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Value Proposition Section */}
      <Box py={24}>
        <Container maxW="7xl" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} alignItems="center">
            <Box>
              <Heading size="3xl" mb={6} color="teal.700">
                For Retailers
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Running a shop is hard work. We make stocking up easy, affordable, and fast.
                No more closing your shop to travel to the market.
              </Text>
              <Stack gap={6}>
                <FeatureRow
                  icon={FaMobileAlt}
                  title="24/7 Ordering"
                  desc="Browse our catalog and place orders anytime from your phone."
                />
                <FeatureRow
                  icon={FaHandHoldingUsd}
                  title="Buy Now, Pay Later"
                  desc="Access micro-credit to stock up now and pay as you sell."
                />
                <FeatureRow
                  icon={FaTruck}
                  title="Doorstep Delivery"
                  desc="Fast, reliable delivery directly to your shop."
                />
              </Stack>
            </Box>
            <Box
              bg="orange.50"
              rounded="3xl"
              p={10}
              border="1px solid"
              borderColor="orange.100"
              position="relative"
            >
              {/* Abstract visual representation */}
              <Stack gap={4}>
                <Card.Root size="sm" shadow="md">
                  <Card.Header>
                    <Flex justify="space-between">
                      <Text fontWeight="bold">Order #1234</Text>
                      <Badge colorPalette="green">Delivered</Badge>
                    </Flex>
                  </Card.Header>
                  <Card.Body>
                    <Text color="gray.500">20x Tomato Paste, 10x Rice Bags</Text>
                  </Card.Body>
                </Card.Root>
                <Card.Root size="sm" shadow="md" ml={8}>
                  <Card.Header>
                    <Flex justify="space-between">
                      <Text fontWeight="bold">Credit Limit</Text>
                      <Text color="green.600" fontWeight="bold">GHS 5,000</Text>
                    </Flex>
                  </Card.Header>
                  <Card.Body>
                    <Text color="gray.500">Available to spend</Text>
                  </Card.Body>
                </Card.Root>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="gray.900" color="white" py={24}>
        <Container maxW="7xl" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} alignItems="center">
            <Box order={{ base: 2, md: 1 }}>
              <SimpleGrid columns={2} gap={4}>
                <StatCard value="500+" label="Retailers" />
                <StatCard value="24h" label="Delivery Time" />
                <StatCard value="98%" label="Fulfillment Rate" />
                <StatCard value="15%" label="Growth / Mo" />
              </SimpleGrid>
            </Box>
            <Box order={{ base: 1, md: 2 }}>
              <Heading size="3xl" mb={6} color="white">
                For Distributors
              </Heading>
              <Text fontSize="lg" color="gray.400" mb={8}>
                Expand your reach and optimize your operations. Wabaki provides the digital infrastructure to scale your distribution network.
              </Text>
              <Stack gap={6}>
                <FeatureRow
                  icon={MdTrendingUp}
                  title="Data-Driven Insights"
                  desc="Real-time visibility on market demand and trends."
                  dark
                />
                <FeatureRow
                  icon={FaChartLine}
                  title="Efficient Operations"
                  desc="Streamline order processing and reduce cost-to-serve."
                  dark
                />
                <FeatureRow
                  icon={MdInventory}
                  title="Inventory Management"
                  desc="Smart tools to manage stock levels and predict demand."
                  dark
                />
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box py={24} bg="white">
        <Container maxW="7xl" mx="auto">
          <Heading size="3xl" textAlign="center" mb={4} color="teal.800">
            Our Platform Services
          </Heading>
          <Text textAlign="center" fontSize="xl" color="gray.600" mb={16} maxW="2xl" mx="auto">
            Everything you need to manage the supply chain, from warehouse to storefront.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            <ServiceCard
              icon={FaBoxOpen}
              title="B2B Catalog"
              desc="Real-time inventory, dynamic pricing, and bulk ordering capabilities."
            />
            <ServiceCard
              icon={FaHandHoldingUsd}
              title="Integrated BNPL"
              desc="Micro-financing based on order history to solve liquidity crunches."
            />
            <ServiceCard
              icon={FaTruck}
              title="Digital Logistics"
              desc="Simplified order tracking and delivery notifications."
            />
            <ServiceCard
              icon={MdInventory}
              title="Admin Portal"
              desc="Powerful backend for stock, credit, and route optimization."
            />
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

function FeatureRow({ icon, title, desc, dark = false }: { icon: any, title: string, desc: string, dark?: boolean }) {
  return (
    <Flex gap={4}>
      <Flex
        shrink={0}
        w={12}
        h={12}
        align="center"
        justify="center"
        rounded="full"
        bg={dark ? "white/10" : "teal.50"}
        color={dark ? "orange.300" : "teal.600"}
      >
        <Icon as={icon} fontSize="xl" />
      </Flex>
      <Box>
        <Text fontWeight="bold" fontSize="lg" color={dark ? "white" : "gray.800"}>{title}</Text>
        <Text color={dark ? "gray.400" : "gray.600"}>{desc}</Text>
      </Box>
    </Flex>
  )
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card.Root variant="elevated" shadow="lg" _hover={{ transform: "translateY(-5px)", transition: "all 0.2s" }}>
      <Card.Body gap={4}>
        <Flex
          w={14}
          h={14}
          align="center"
          justify="center"
          rounded="xl"
          bg="teal.600"
          color="white"
          mb={2}
        >
          <Icon as={icon} fontSize="2xl" />
        </Flex>
        <Card.Title fontSize="xl">{title}</Card.Title>
        <Card.Description fontSize="md">
          {desc}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <Box bg="white/10" p={6} rounded="xl" textAlign="center" backdropFilter="blur(10px)">
      <Text fontSize="3xl" fontWeight="bold" color="orange.300">{value}</Text>
      <Text color="gray.300" fontSize="sm">{label}</Text>
    </Box>
  )
}
