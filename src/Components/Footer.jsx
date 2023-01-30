import { Container, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
      <Stack backgroundColor='black' pb='30px' pt='30px'>
       <Container>
       <Stack>
       <Text fontSize={"2xl"} fontWeight='700'  color="yellow">SAMSUR SEKH</Text>
        <Text color='white' fontWeight='700'>
          A Passionate aspiring Full Stack Developer skilled in React JS, Node
          passionate about building excellent software that improves the lives
          of those around me. Look forward to joining a company where I will be
          able to contribute towards individual and company growth.
        </Text>
        <HStack display='flex' spacing='6' justifyContent='center'>
          <a href="https://github.com/Samsursekh" rel="noreferrer" target="_blank">
            <BsGithub color="white" fontSize="30px" />
          </a>
          <a href="https://twitter.com/SamsurSekh1" rel="noreferrer" target="_blank">
            <BsTwitter  color="white" fontSize="30px" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samsur-sekh-b6961a22b/">
            <BsLinkedin color="white" fontSize="30px" />
          </a>
        </HStack>
        <Stack pt='10px'>
          <Text color='white' fontWeight='700'>©2023. Design with ❤️ by Samsur.</Text>
        </Stack>
       </Stack>
       </Container>
      </Stack>
  );
};

export default Footer;
