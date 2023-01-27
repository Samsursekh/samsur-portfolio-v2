import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import Calender from "react-github-calendar";

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
        <Container mt="20px">
           <Calender style={{color: "white"}} username="samsursekh" />
        </Container>
    </SimpleGrid>
    </>
  )
}

export default GithubCalender
