import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import Calender from "react-github-calendar";
import { MotionAnimate } from "react-motion-animate";

const GithubCalender = () => {
  return (
    <>
      <Stack display="flex" alignItems="center" bgColor="#000C66">
        <Heading
          color="white"
          paddingBottom="10px"
          borderBottomWidth="7px"
          borderBottomColor="yellow"
        >
          Github Calendar
        </Heading>
      </Stack>

      <SimpleGrid minChildWidth="300px" bgColor="#000C66" pb="40px">
        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Container mt="20px">
            <Calender style={{ color: "white" }} username="samsursekh" />
          </Container>
        </MotionAnimate>
      </SimpleGrid>
    </>
  );
};

export default GithubCalender;
