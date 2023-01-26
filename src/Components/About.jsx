import { Button, Container, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import resumeIcon from "../Assets/resumeIcon.jpg"
import resume from "../Assets/Samsur sekh resume.pdf"
const About = () => {
  return (
    <SimpleGrid
      id="about-wrapper"
      minChildWidth="300px"
      bgColor="#000C66"
      pb={"40px"}
    >
      <Container>
        <Stack display='flex' alignItems='center'>
          <Heading
            color='white'
            paddingBottom='10px'
            borderBottomWidth='7px'
            borderBottomColor='yellow'
          >
            About Me
          </Heading>
          <Text fontSize="2xl" color="white">
            Analytical and detailed oriented Full Stack Developer. Capable of
            writing production-ready code using ReactJS, Redux and CSS on the
            front-end, NodeJS and Express on the backend to build single-page
            applications. Passionate about coding and intensely interested to
            take the the responsibility of a product.
          </Text>
        </Stack>
      </Container>
      <Container>
        <Stack display='flex' alignItems='center'>
          <Text fontSize='3xl' color='yellow' fontFamily='fantasy'>Why Choose Me?  🤔</Text>
          <Image width='15rem' src={resumeIcon} alt="resumeIcon"/>
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

export default About;
