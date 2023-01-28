import {
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaDownload } from "react-icons/fa";
import resumeIcon from "../Assets/resumeIcon.jpg";
import resume from "../Assets/Samsur sekh resume.pdf";
import { MotionAnimate } from "react-motion-animate";

const About = () => {
  return (
    <SimpleGrid
      id="about-wrapper"
      minChildWidth="300px"
      bgColor="#000C66"
      pb={"40px"}
    >
      <MotionAnimate
        animation="fadeInUp"
        reset={true}
        distance={200}
        delay={0.5}
        speed={1}
      >
        <Container>
          <Stack display="flex" alignItems="center">
            <Heading
              color="white"
              paddingBottom="10px"
              borderBottomWidth="7px"
              borderBottomColor="yellow"
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
          <Stack mt="20px">
            <Button
              as="a"
              target="_blank"
              href={resume}
              margin="auto"
              download={true}
              fontWeight="800"
              color="blue"
              borderColor="blue"
              rightIcon={<FaDownload />}
            >
              GET RESUME
            </Button>
          </Stack>
        </Container>
      </MotionAnimate>

      <MotionAnimate
        animation="fadeInUp"
        reset={true}
        distance={200}
        delay={0.5}
        speed={1}
      >
        {" "}
        <Container>
          <Stack display="flex" alignItems="center" mt="50px">
            <Text fontSize="3xl" color="yellow" fontFamily="fantasy">
              Why Choose Me? 🤔
            </Text>
            <Image
              width="15rem"
              borderRadius="full"
              src={resumeIcon}
              alt="resumeIcon"
            />
            <Stack textAlign="left">
              <Text
                color="white"
                mt="50px"
                fontWeight="700"
                listStyleType="none"
              >
                <li>👉 1200+ Hours of Full Stack Development</li>
                <li>👉 500+ Hours of DSA</li>
                <li>👉 200+ Hours of Soft Skill</li>
                <li>👉 50+ Mini Project</li>
                <li>👉 5+ Collaborative Project</li>
                <li>👉 Many Other Project</li>
              </Text>
            </Stack>
          </Stack>
        </Container>
      </MotionAnimate>
    </SimpleGrid>
  );
};

export default About;
