import { Badge, Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import astro from "../../Assets/1.png";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdOutgoingMail } from "react-icons/md";

const AstroWebsiteCard = () => {
    const property = {
        imageUrl: astro,
        imageAlt: "Project image",
        title:
            "This is basically a platform where any user can make a one an appointment with the astrologer whether it is online or offline",
    };
    return (
        <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mt="50px"
        >
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
                <Badge variant="solid" colorScheme="pink" mb='15px'>
                    FULL STACK
                </Badge>
                <HStack display="flex" justifyContent="center">
                    <Text color="white" fontWeight="800" fontSize="2xl">
                        Achariyadebdutta.com
                    </Text>
                </HStack>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    color="white"
                    lineHeight="tight"
                >
                    {property.title}
                </Box>
                <HStack mt="5" display="flex" justifyContent="space-between">
                    <Box>
                        {" "}
                        <Button
                            as="a"
                            target="_blank"
                            href="https://github.com/Samsursekh/dev-astro-website-MERN"
                            margin="auto"
                            fontWeight="800"
                            color="blue"
                            borderColor="blue"
                            rightIcon={<BsGithub />}
                        >
                            Github
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            as="a"
                            target="_blank"
                            href="dev-astro-website-mern.vercel.app/"
                            margin="auto"
                            fontWeight="800"
                            color="blue"
                            borderColor="blue"
                            rightIcon={<BiLinkExternal />}
                        >
                            Demo
                        </Button>
                    </Box>
                </HStack>

                <HStack mt="5" display="flex" justifyContent="center">
                    <GrReactjs color="#7EC8E3" fontSize="50px" />
                    <IoLogoCss3 color="3347FF" fontSize="50px" />
                    <SiTailwindcss color="#75E6DA" fontSize="50px" />
                    <SiMongodb color="#189AB4" fontSize="50px" />
                    <SiExpress color="#3D550C" fontSize="50px" />
                    <IoLogoNodejs color="#59981A" fontSize="50px" />
                    <MdOutgoingMail color="white" fontSize="50px" />
                </HStack>

                <Text color="white" style={{ marginTop: "10px" }}>This is a completely new website. So every one should check this one. <span style={{ color: "white", backgroundColor: "red", padding: "2px 5px", fontWeight: "800", borderRadius: "30px" }}>👆 NEW </span></Text>

            </Box>
        </Box>
    );
};

export default AstroWebsiteCard;
