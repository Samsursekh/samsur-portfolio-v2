import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Typical from "react-typical";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import resume from "../Assets/Samsur sekh resume.pdf";
import samsur from "../Assets/samsur.png";

const StyledContainer = styled.div`
  font-size: 1.8em;
  text-align: center;
  color: yellow;
  font-style: italic;
`;
const Home = () => {
  return (
    <SimpleGrid
      id="home-wrapper"
      minChildWidth="220px"
      bgColor="#000C66"
      pb={"40px"}
    >
      <Container bgColor="#000C66" m={"auto"}>
        <Box bg="#000C66" mt={"30px"}>
          <Image
           borderRadius={'10px'}
           boxShadow="rgba(10, 10, 10, 100) 0px 19px 38px, rgba(255,255,255, 0.2) 0px 15px 12px"
            width='12rem'
            src={samsur}
            // src="https://icon-library.com/images/admin-user-icon/admin-user-icon-24.jpg"
            m="auto"
            alt="Samsur's Image"
          />
          <Stack>
            <a href="https://github.com/Samsursekh"><BsGithub color="white" fontSize="30px" /></a>
            <a href="https://twitter.com/SamsurSekh1"><BsTwitter color="white" fontSize="30px" /></a>
            <a href="https://www.linkedin.com/in/samsur-sekh-b6961a22b/"><BsLinkedin color="white" fontSize="30px" /></a>
          </Stack>
        </Box>
      </Container>

      <Container mt={"15px"}>
        <Stack spacing={3} color="white">
          <Text
            fontSize="4xl"
            as="b"
            color={"white"}
            display="flex"
            justifyContent="space-evenly"
          >
            Hello
            <Image
              boxSize="50px"
              src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png"
              alt="hand"
            />
            I'm
          </Text>
          <Text as="mark" fontSize="4xl">
            SAMSUR SEKH
          </Text>
          <StyledContainer>
            <Typical
              id="typicalStyle"
              loop={Infinity}
              steps={[
                "Energised Developer 🍎",
                1000,
                "Full Stack Developer 💻",
                1000,
                "MERN Stack Developer ❤️",
                1000,
              ]}
            />
          </StyledContainer>
          <Text>
            Ability to create applications with both front-end and back-end
            functionality.
          </Text>
        </Stack>
        <HStack margin="auto" display='flex' justifyContent={'center'} mt="20px">
          <a
            href={resume}
            margin="auto"
            download={true}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              fontWeight="800"
              color="blue"
              borderColor="blue"
              rightIcon={<FaDownload />}
            >
              RESUME
            </Button>
          </a>
        </HStack>
      </Container>
    </SimpleGrid>
  );
};

export default Home;
