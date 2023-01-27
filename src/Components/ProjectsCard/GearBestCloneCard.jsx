import { Badge, Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import gearbest from "../../Assets/gearbest.jpeg";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { SiChakraui, SiExpress, SiMongodb, SiRedux } from "react-icons/si";

const GearBest_clone__Card = () => {
  const property = {
    imageUrl: gearbest,
    imageAlt: "Project image",
    title:
      "gearbest.com is an innovative online Chinese company providing wholesale electronics, appliances, and accessories. worked on this project during unit-6 construct week at Masai School with the help of 3 other team members.",
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
            Gearbest Clone
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
              href="https://github.com/akashkanade9182/melodic-bead-3842"
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
              href="https://gadgetbest.netlify.app/"
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
          <SiRedux color="#7d2ae8" fontSize="50px" />
          <IoLogoCss3 color="3347FF" fontSize="50px" />
          <SiChakraui color="#75E6DA" fontSize="50px" />
          <SiMongodb color="#189AB4" fontSize="50px" />
          <SiExpress color="#3D550C" fontSize="50px" />
          <IoLogoNodejs color="#59981A" fontSize="50px" />
        </HStack>
      </Box>
    </Box>
  );
};

export default GearBest_clone__Card;
