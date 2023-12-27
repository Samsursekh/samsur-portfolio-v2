import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
// import CampaignMonitorCloneCard from "./ProjectsCard/CampaignMonitorCloneCard";
import GearBestCloneCard from "./ProjectsCard/GearBestCloneCard";
import JioMartCloneCard from "./ProjectsCard/JioMartCloneCard";
import RentoMozoCard from "./ProjectsCard/RentoMozoCard";
import { MotionAnimate } from "react-motion-animate";
import AstroWebsiteCard from "./ProjectsCard/AstroWebsiteCard";

const Project = () => {
  return (
    <>
      <Stack display="flex" alignItems="center" bgColor="#000C66">
        <Heading
          color="white"
          paddingBottom="10px"
          borderBottomWidth="7px"
          borderBottomColor="yellow"
        >
          Projects
        </Heading>
      </Stack>
      <SimpleGrid
        minChildWidth="300px"
        id="projects-wrapper"
        textAlign="center"
        m={"auto"}
        bgColor="#000C66"
        pb={"40px"}
      >
        {/* <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        >
          <Container>
            {" "}
            <CampaignMonitorCloneCard />
          </Container>
        </MotionAnimate> */}

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        ><Container>
            <JioMartCloneCard />
          </Container>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        > <Container>
            <RentoMozoCard />
          </Container>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        > <Container>
            <GearBestCloneCard />
          </Container>
        </MotionAnimate>

        <MotionAnimate
          animation="fadeInUp"
          reset={true}
          distance={200}
          delay={0.5}
          speed={1}
        > <Container>
            <AstroWebsiteCard />
          </Container>
        </MotionAnimate>
      </SimpleGrid>
    </>

  );
};

export default Project;
