import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import CampaignMonitorCloneCard from "./ProjectsCard/CampaignMonitorCloneCard";
import GearBestCloneCard from "./ProjectsCard/GearBestCloneCard";
import JioMartCloneCard from "./ProjectsCard/JioMartCloneCard";
import RentoMozoCard from "./ProjectsCard/RentoMozoCard";

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
        // columns={{ md: 2 }}
        id="projects-wrapper"
        textAlign='center'
        m={'auto'}
        bgColor="#000C66"
        pb={"40px"}
      >
        <Container> <CampaignMonitorCloneCard /></Container>
        
        <Container>
        <JioMartCloneCard />
        </Container>
       <Container>
       <RentoMozoCard />
       </Container>
      
       <Container>
       <GearBestCloneCard />
       </Container>
       
      </SimpleGrid>
    </>
  );
};

export default Project;
