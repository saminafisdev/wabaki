"use client"

import {
    Box,
    Container,
    Flex,
    Heading,
    Stack,
    Button,
    HStack,
    Icon,
} from "@chakra-ui/react"
import Link from "next/link"

type AfricaProps = {
    size: string;
};

const Africa = ({ size }: AfricaProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"><path fill="#338a4d" d="m201.56 19.495l-87.79 9.131l-73.745 94.814v52.676l56.186 61.805l64.615-13.344l49.164 9.832l-10.535 37.926l33.711 61.103l-16.855 42.842l39.79 116.225l53.62-8.768l49.164-55.484l4.213-38.629l31.605-23.879l-6.322-69.531l83.594-106.994l-51.989 7.263l-79.363-138.359l-125.016-8.428l-14.046-30.2zm252.346 319.8l-14.402 20.86l-13.408.496c-11.849 24.321-12.598 38.019-13.907 66.547l17.383 4.471l21.852-52.147l2.482-40.226z" /></svg>
);

export default function Navbar() {
    return (
        <Box as="nav" bg="white" py={4} px={8} shadow="sm" position="sticky" top={0} zIndex={10}>
            <Container maxW="7xl" mx="auto">
                <Flex justify="space-between" align="center">
                    <Link href="/">
                        <HStack>
                            <Icon>
                                <Africa size="24px" />
                            </Icon>
                            <Heading size="xl" color="teal.600" fontWeight="bold" letterSpacing="tight">
                                Wabaki
                            </Heading>
                        </HStack>
                    </Link>
                    <Stack direction="row" gap={8} display={{ base: "none", md: "flex" }} align="center">
                        <Link href="/features">
                            <Button variant="ghost" colorPalette="gray">Features</Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="ghost" colorPalette="gray">Services</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="ghost" colorPalette="gray">About</Button>
                        </Link>
                        <Link href="/contact">
                            <Button colorPalette="teal" variant="solid" size="sm">Partner with Us</Button>
                        </Link>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    )
}
