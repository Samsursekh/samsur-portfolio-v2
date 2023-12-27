import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Jiomart__clone from "../../Assets/Jiomart__clone.jpeg";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { SiChakraui, SiRedux } from "react-icons/si";


const JioMart_clone__Card = () => {
  const property = {
    imageUrl: Jiomart__clone,
    imageAlt: "Project image",
    title:
      "Have cloned the Online Grocery- JioMart website. JioMart is an Indian ecommerce website, where user can choose and buy online products such as Grocery, electronic , Fashion & Beauty products and much more.",
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
        <Badge variant="solid" colorScheme="green">
          FRONTEND
        </Badge>
        <HStack display="flex" justifyContent="center">
          <Text color="white" fontWeight="800" fontSize="2xl">
            Jiomart__clone
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
              href="https://github.com/Samsursekh/Jiomart-clone"
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
              href="https://jiomart-clone.vercel.app/"
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
          <TiHtml5 color="red" fontSize="50px" />
          <IoLogoCss3 color="3347FF" fontSize="50px" />
          <GrReactjs color="#7EC8E3" fontSize="50px" />
          <SiRedux color="#7d2ae8" fontSize="50px" />
          <SiChakraui color="#75E6DA" fontSize="50px" />
        </HStack>
      </Box>
    </Box>
  );
};

export default JioMart_clone__Card;
