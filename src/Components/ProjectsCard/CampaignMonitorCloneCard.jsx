import {
    Badge,
    Box,
    Button,
    HStack,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import CampaignMonitor__clone from "../../Assets/CampaignMonitor__clone.jpeg";
  import { TiHtml5 } from "react-icons/ti";
  import { IoLogoCss3 } from "react-icons/io";
  import { GrReactjs } from "react-icons/gr";
  import { BsGithub } from "react-icons/bs";
  import { BiLinkExternal } from "react-icons/bi";
  
  const CampaignMonitorCloneCard = () => {
    const property = {
      imageUrl:  CampaignMonitor__clone,
      imageAlt: "Project image",
      title:
        "It is basically a Email marketing website where user can make a business email by clicking within some times. It was an individual project. Took 5 days to complete all tasks. With the help of React.",
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
            CampaignMonitor__clone
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
                href="https://github.com/Samsursekh/Campaignmonitor-Clone/tree/day5/my-app"
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
                href="https://my-app-taupe-kappa.vercel.app/"
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
          </HStack>
        </Box>
      </Box>
    );
  };
  
  export default CampaignMonitorCloneCard;
  