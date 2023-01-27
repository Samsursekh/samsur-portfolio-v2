import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import rentomozo from "../../Assets/rentomozo.jpeg";
import CampaignMonitor__clone from "../../Assets/CampaignMonitor__clone.jpeg";
import gearbest from "../../Assets/gearbest.jpeg";
import Jiomart__clone from "../../Assets/Jiomart__clone.jpeg";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const RentoMozoCard = () => {
  const property = {
    imageUrl: [rentomozo, CampaignMonitor__clone, gearbest, Jiomart__clone],
    imageAlt: "Project image",
    title:
      "This is a Ecommerce Website where Users can register and log in to the website, choose the product, and add it to the cart. A collaborative project built by a team of 5 members within 4 days.",
  };
  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="50px"
    >
      <Image src={property.imageUrl[0]} alt={property.imageAlt} />

      <Box p="6">
        <Badge variant="solid" colorScheme="green">
          FRONTEND
        </Badge>
        <HStack display="flex" justifyContent="center">
          <Text color="white" fontWeight="800" fontSize="2xl">
            Rentomozo__Clone
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
              href="https://github.com/pratiksontakke/rentomojo_clone"
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
              href="https://jovial-dusk-c6ab4b.netlify.app/"
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
          <TbBrandJavascript color="orange" fontSize="50px" />
        </HStack>
      </Box>
    </Box>
  );
};

export default RentoMozoCard;
