import Image from "next/image";
import Link from "next/link";
import {
    Box,
    useColorMode,
    Flex,
    Button,
    Input,
    StylizedButton,
    Image as CustomImage,
    HStack,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import EmailCapture from "../Landing/email-capture";
import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";
import SectionResolver from "../Landing/SectionResolver";

const socials = [
        {
            icon: "discord",
            url: "https://discord.gg/UqU39muz",
        },
        {
            icon: "telegram",
            url: "https://t.me/aerx_int",
        },
    ];

function Footer() {
    const { t } = useTranslation("footer");
    const { colorMode } = useColorMode();

    

    return (
        <>
            <SectionResolver
                heading={"Be part of the team"}
                styledHeading="Right now"
                paddingTop={20}
                image="/team.png"
                body={[
                    `Kindly subscribe to our email newsletter to get amazing information.`,
                ]}
                imgSpan={[12, 12, 5]}
                bodySpan={[12, 12, 7]}
                overflow="hidden"
            >
                <Flex
                    maxW="450px"
                    mt={4}
                    mb={2}
                    px={4}
                    py={2}
                    alignItems="center"
                    borderRadius="full"
                    border="1px"
                    borderColor="#DEDEDE"
                >
                    <Input
                        border="none"
                        fontSize={[16, 20]}
                        placeholder="Enter your email here"
                        _focus={{
                            boxShadow: 0,
                        }}
                    />
                    <Button
                        padding={0}
                        borderRadius="full"
                        height="14"
                        width="14"
                        backgroundColor={"#8D00FF"}
                    >
                        <CustomImage src="/arrow-btn.svg" />
                    </Button>
                </Flex>
                <Flex gap={3}>
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.url}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <CustomImage
                                src={`/${social.icon}.svg`}
                                alt={social.icon}
                            />
                        </a>
                    ))}
                </Flex>
            </SectionResolver>
        </>
        // <Box as="footer" pt="25rem">
        //     <SimpleGrid columns={2} spacing={10}>
        //         <Box textAlign={"center"}>
        //             <Link href="/">
        //                 <ChakraImage
        //                     src="/images/white-logo.svg"
        //                     alt={t("logoAlt")}
        //                     className="rounded-sm"
        //                     layout="responsive"
        //                     margin="0 auto"
        //                     lazyload="true"
        //                     mb={8}
        //                     cursor={"pointer"}
        //                     width={"150px"}
        //                     filter={
        //                         colorMode === "light"
        //                             ? "invert(1)"
        //                             : "invert(0)"
        //                     }
        //                 />
        //             </Link>
        //             <Text fontWeight="bold"> The future has arrived</Text>
        //             <Text fontWeight="bold">emailexample@aerx.com</Text>
        //         </Box>
        //         <Box height="100%" width="100%">
        //             <EmailCapture />
        //             <HStack
        //                 fontSize="2xl"
        //                 spacing={5}
        //                 justifyContent={"flex-start"}
        //             >
        //                 <Box
        //                     _hover={{ opacity: 0.6 }}
        //                     cursor={"pointer"}
        //                     transition="0.3s ease"
        //                 >
        //                     <IoLogoDiscord />
        //                 </Box>
        //                 <Box
        //                     _hover={{ opacity: 0.6 }}
        //                     cursor={"pointer"}
        //                     transition="0.3s ease"
        //                 >
        //                     <IoLogoTwitter />
        //                 </Box>
        //             </HStack>
        //         </Box>
        //     </SimpleGrid>
        //     <ChakraImage
        //         zIndex={-1}
        //         src="/footerimg2.png"
        //         maxWidth={"100vw"}
        //         position="absolute"
        //         bottom="-10vh"
        //         filter={colorMode === "light" ? "opacity(0.7)" : "opacity(0.5)"}
        //     />
        // </Box>
    );
}

export default Footer;
