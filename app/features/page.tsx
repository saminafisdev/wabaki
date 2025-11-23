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
    Tabs,
    Card,
} from "@chakra-ui/react"
import { FaStore, FaTruck, FaChartLine, FaMobileAlt, FaHandHoldingUsd, FaBoxOpen, FaUsers, FaClipboardList } from "react-icons/fa"
import { MdInventory, MdTrendingUp, MdPayment } from "react-icons/md"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function FeaturesPage() {
    return (
        <Box minH="100vh" bg="gray.50" color="gray.800">
            <Navbar />

            <Box bg="teal.600" color="white" py={20}>
                <Container maxW="7xl" mx="auto">
                    <Heading size="4xl" mb={4}>Platform Features</Heading>
                    <Text fontSize="xl" maxW="2xl" opacity={0.9}>
                        Discover how Wabaki empowers both retailers and distributors with cutting-edge tools.
                    </Text>
                </Container>
            </Box>

            <Container maxW="7xl" py={16} mx="auto">
                <Tabs.Root defaultValue="retailers" variant="enclosed">
                    <Tabs.List mb={8}>
                        <Tabs.Trigger value="retailers" _selected={{ color: "teal.600", borderColor: "teal.600" }}>
                            <Icon as={FaStore} mr={2} /> For Retailers
                        </Tabs.Trigger>
                        <Tabs.Trigger value="distributors" _selected={{ color: "teal.600", borderColor: "teal.600" }}>
                            <Icon as={FaTruck} mr={2} /> For Distributors
                        </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="retailers">
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            <FeatureCard
                                icon={FaMobileAlt}
                                title="Mobile Ordering App"
                                desc="A user-friendly mobile app designed for low-bandwidth environments. Browse catalogs, check prices, and place orders in seconds."
                            />
                            <FeatureCard
                                icon={FaHandHoldingUsd}
                                title="Instant Micro-Credit"
                                desc="Get approved for inventory loans instantly based on your purchase history. Buy now and pay later to keep your shelves stocked."
                            />
                            <FeatureCard
                                icon={FaTruck}
                                title="Reliable Delivery"
                                desc="Track your orders in real-time. We ensure timely delivery directly to your shop, saving you travel time and costs."
                            />
                            <FeatureCard
                                icon={MdPayment}
                                title="Flexible Payments"
                                desc="Pay via mobile money, cash on delivery, or through your credit line. We support multiple payment methods for your convenience."
                            />
                            <FeatureCard
                                icon={FaClipboardList}
                                title="Order History"
                                desc="Keep track of all your past purchases. Easily reorder your most popular items with a single click."
                            />
                        </SimpleGrid>
                    </Tabs.Content>

                    <Tabs.Content value="distributors">
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                            <FeatureCard
                                icon={MdInventory}
                                title="Inventory Management"
                                desc="Real-time tracking of stock levels across multiple warehouses. Get alerts when stock is low and automate reordering."
                            />
                            <FeatureCard
                                icon={MdTrendingUp}
                                title="Sales Analytics"
                                desc="Visualize sales trends, identify top-performing products, and understand regional demand with powerful analytics dashboards."
                            />
                            <FeatureCard
                                icon={FaUsers}
                                title="Customer CRM"
                                desc="Manage retailer relationships effectively. View customer profiles, credit history, and order patterns to tailor your sales strategy."
                            />
                            <FeatureCard
                                icon={FaTruck}
                                title="Route Optimization"
                                desc="Optimize delivery routes to reduce fuel costs and improve delivery times. Assign drivers and track fleet performance."
                            />
                            <FeatureCard
                                icon={FaChartLine}
                                title="Credit Risk Assessment"
                                desc="AI-powered credit scoring for retailers helps you minimize risk while maximizing sales through credit offerings."
                            />
                        </SimpleGrid>
                    </Tabs.Content>
                </Tabs.Root>
            </Container>

            <Footer />
        </Box>
    )
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <Card.Root variant="elevated" shadow="md">
            <Card.Body gap={4}>
                <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    rounded="full"
                    bg="teal.50"
                    color="teal.600"
                >
                    <Icon as={icon} fontSize="xl" />
                </Flex>
                <Card.Title fontSize="lg">{title}</Card.Title>
                <Card.Description>
                    {desc}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    )
}
