import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoLogoNodejs } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiMongodb, SiRedux } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { MotionAnimate } from "react-motion-animate";

const Skills = () => {
  return (
    <SimpleGrid id="skills-wrapper" bgColor="#000C66" pb={"40px"}>
      <Stack display="flex" alignItems="center">
        <Heading
          color="white"
          paddingBottom="10px"
          borderBottomWidth="7px"
          borderBottomColor="yellow"
        >
          Skills
        </Heading>
      </Stack>
      <SimpleGrid
        w="80%"
        bgColor="#000C66"
        columns={{ sm: 2, md: 3 }}
        spacing="4"
        margin="auto"
        textAlign="center"
        mt="40px"
      >
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <TfiHtml5 fontSize="5rem" color="red" />
            </HStack>
            <Text fontSize="2xl">Frontend Technologies</Text>
            <Text fontSize="1xl">HTML, CSS, JavaScript</Text>
          </Box>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <GrReactjs fontSize="5rem" />
            </HStack>
            <Text fontSize="2xl">Web Frameworks</Text>
            <Text fontSize="1xl">React JS</Text>
          </Box>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <SiMongodb fontSize="5rem" color="teal" />
            </HStack>
            <Text fontSize="2xl">Database</Text>
            <Text fontSize="1xl">Mongo DB</Text>
          </Box>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <IoLogoNodejs fontSize="5rem" color="#3D550C" />
            </HStack>
            <Text fontSize="2xl">Node JS</Text>
            <Text fontSize="1xl">Backend</Text>
          </Box>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <SiRedux fontSize="5rem" color="#764abc" />
            </HStack>
            <Text fontSize="2xl">Redux</Text>
            <Text fontSize="1xl">
              A Predictable State Container for JS Apps
            </Text>
          </Box>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <BsGithub fontSize="5rem" color="black" />
            </HStack>
            <Text fontSize="2xl">Code Version Control</Text>
            <Text fontSize="1xl">GitHub, Git</Text>
          </Box>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--rjxO02ux--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w4qxi1gsnhuey77654qj.png"
                alt="DSA"
                w='5rem'
                h='3.5rem'
              />
            </HStack>
            <Text fontSize="2xl">Data Structure and Alogorithms</Text>
            <Text fontSize="1xl">
              DSA for Critical Thinking and Creative Thinking
            </Text>
          </Box>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuZmf_6aI31ftF30DtMtIfGGhYlej2eDhrg&usqp=CAU"
                alt="DSA"
                w='5rem'
              />
            </HStack>
            <Text fontSize="2xl">Competent Developer</Text>
            <Text fontSize="1xl">
              Problem Solving Mindset and Time Management
            </Text>
          </Box>
        </MotionAnimate>
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Box
            color="#000C66"
            bgColor="white"
            padding="6"
            _hover={{
              background: "white",
              fontWeight: "bold",
              color: "#000C66.500",
              transform: "scale(1.020)",
              transition: ".15s ease-in",
              cursor: "pointer",
            }}
          >
            <HStack display="flex" justifyContent="center">
              <Image
                src="https://teamhood.com/wp-content/uploads/2021/03/best-remote-collaboration-tools.jpg"
                alt="collaboration image"
                w='5rem'
                h='3.5rem'
              />
            </HStack>
            <Text fontSize="2xl">Online Collaboration</Text>
            <Text fontSize="1xl">Team Worker ,Communication Skills</Text>
          </Box>
        </MotionAnimate>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default Skills;
