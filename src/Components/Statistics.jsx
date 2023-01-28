import { Container, Heading, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import {MotionAnimate} from "react-motion-animate";

const Statistics = () => {
  return (
    
    <>
      <Stack display="flex" alignItems="center" bgColor="#000C66">
        <Heading
          color="white"
          paddingBottom="10px"
          borderBottomWidth="7px"
          borderBottomColor="yellow"
        >
          Statistics
        </Heading>
      </Stack>

      <SimpleGrid minChildWidth="300px" bgColor="#000C66" pb={"40px"}>
      <MotionAnimate  animation='fadeInUp'
    reset={true}
    distance={200}
    delay={0.5}
    speed={1}>
        <Container>
          <Stack mt="20px">
            <Image
              src="https://camo.githubusercontent.com/0343b8ae1813335120701d226ae9d0364af4ff97c51ca58c483cc0e12b35d29c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73616d73757273656b682673686f775f69636f6e733d74727565266c6f63616c653d656e"
              alt="Samsur's Github Stats"
            />
          </Stack>
        </Container>
        </MotionAnimate>
        <MotionAnimate  animation='fadeInUp'
    reset={true}
    distance={200}
    delay={0.5}
    speed={1}>
        <Container>
          <Stack mt="20px">
            <Image
              src="https://camo.githubusercontent.com/07fe26b084dd6087b957b344156520fae9f57d98755f8622ef0f844f61d49f98/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73616d73757273656b6826"
              alt="Samsur's Github Contribution"
            />
          </Stack>
        </Container>
        </MotionAnimate>
      </SimpleGrid>
    </>
  );
};

export default Statistics;
