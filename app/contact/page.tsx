"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    Stack,
    SimpleGrid,
    Input,
    Textarea,
    Button,
    Field,
    Icon,
    Flex,
} from "@chakra-ui/react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactPage() {
    return (
        <Box minH="100vh" bg="gray.50" color="gray.800">
            <Navbar />

            <Box bg="teal.600" color="white" py={20}>
                <Container maxW="7xl" mx="auto">
                    <Heading size="4xl" mb={4}>Contact Us</Heading>
                    <Text fontSize="xl" maxW="2xl" opacity={0.9}>
                        Have questions? We'd love to hear from you. Reach out to our team.
                    </Text>
                </Container>
            </Box>

            <Container maxW="7xl" py={16} mx="auto">
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
                    <Box>
                        <Heading size="2xl" mb={8} color="teal.800">Get in Touch</Heading>
                        <Stack gap={8}>
                            <ContactInfo
                                icon={FaPhone}
                                title="Phone"
                                detail="+233 50 123 4567"
                            />
                            <ContactInfo
                                icon={FaEnvelope}
                                title="Email"
                                detail="hello@wabaki.com"
                            />
                            <ContactInfo
                                icon={FaMapMarkerAlt}
                                title="Office"
                                detail="123 Independence Avenue, Accra, Ghana"
                            />
                        </Stack>

                        <Box mt={12} p={8} bg="orange.50" rounded="xl" border="1px solid" borderColor="orange.100">
                            <Heading size="lg" mb={4} color="orange.700">For Distributors</Heading>
                            <Text mb={4} color="gray.700">
                                Interested in partnering with Wabaki to expand your distribution network?
                            </Text>
                            <Button colorPalette="orange" variant="solid">Partner Inquiry</Button>
                        </Box>
                    </Box>

                    <Box bg="white" p={8} rounded="2xl" shadow="lg">
                        <Heading size="xl" mb={6} color="gray.800">Send us a message</Heading>
                        <Stack gap={6}>
                            <Field.Root>
                                <Field.Label>Name</Field.Label>
                                <Input placeholder="Your full name" size="lg" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Email</Field.Label>
                                <Input placeholder="your@email.com" type="email" size="lg" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Subject</Field.Label>
                                <Input placeholder="How can we help?" size="lg" />
                            </Field.Root>

                            <Field.Root>
                                <Field.Label>Message</Field.Label>
                                <Textarea placeholder="Tell us more..." size="lg" rows={5} />
                            </Field.Root>

                            <Button size="xl" colorPalette="teal" width="full">
                                Send Message
                            </Button>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>

            <Footer />
        </Box>
    )
}

function ContactInfo({ icon, title, detail }: { icon: any, title: string, detail: string }) {
    return (
        <Flex gap={4} align="center">
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
            <Box>
                <Text fontWeight="bold" color="gray.800">{title}</Text>
                <Text color="gray.600" fontSize="lg">{detail}</Text>
            </Box>
        </Flex>
    )
}
