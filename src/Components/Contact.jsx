import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";


const Contact = () => {
  const toast = useToast();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSend = () => {
    var { name, email, subject, message } = userData;
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      // console.log(userData);

      emailjs
        .send(
          "service_d7w676o",
          "template_oned0tl",
          userData,
          "dpsg7KhwKCZcKgU-m"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            console.log(userData);
            toast({
              title: "Message sent successfully",
              status: "success",
              duration: 1000,
              isClosable: true,
            });
          },
          (error) => {
            toast({
              title: "Something went wrong",
              status: "error",
              duration: 1000,
              isClosable: true,
            });
          }
        );

      // setUserData("")
    } else {
      toast({
        title: "Enter All The Credentials",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
    // console.log(name,email,subject, message);
  };
  return (
    <>
      <Stack display="flex" alignItems="center" bgColor="#000C66">
        <Heading
          color="white"
          paddingBottom="10px"
          borderBottomWidth="7px"
          borderBottomColor="yellow"
        >
          Contact Me
        </Heading>
      </Stack>

      <SimpleGrid
        bgColor="#000C66"
        columns={{ sm: 2, md: 3 }}
        spacing="4"
        pt='30px'
        textAlign="center"
      >
    
        <Box color="white" bgColor="#000C66">
          <HStack display="flex" justifyContent="center">
            <BsFillTelephoneFill fontSize="2rem" color="white" />
          </HStack>
          <Text fontSize="2xl">PHONE</Text>
          <Text fontSize="1xl">Contact me</Text>
          <Text fontSize="1xl"  _hover={{
              fontWeight: "bold",
              textDecoration:"underline"
            }}>
            <a href="tel:9339316583" rel="noreferrer" target="_blank">
             +91 9339316583
            </a>
          </Text>
        </Box>
        <Box color="white" bgColor="#000C66">
          <HStack display="flex" justifyContent="center">
            <SiGmail fontSize="2rem" color="white" />
          </HStack>
          <Text fontSize="2xl">EMAIL</Text>
          <Text fontSize="1xl">Contact me on email address</Text>
          <Text fontSize="1xl"  _hover={{
              fontWeight: "bold",
              textDecoration:"underline"
            }}>
           
            <a href="mailto: samsur.sekh.masai@gmail.com" rel="noreferrer" target="_blank">
            samsur.sekh.masai@gmail.com
            </a>
          </Text>
        </Box>
        <Box color="white" bgColor="#000C66">
          <HStack display="flex" justifyContent="center">
            <ImLocation2 fontSize="2rem" color="white" />
          </HStack>
          <Text fontSize="2xl">LOCATION</Text>
          <Text fontSize="1xl">Kolkata , West Bengal</Text>
          <Text fontSize="1xl"  _hover={{
              fontWeight: "bold",
              textDecoration:"underline"
            }}>
            <a href="https://www.google.co.in/maps/place/Kolkata,+West+Bengal/@22.6759958,88.3297288,99193m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895?hl=en&authuser=0" rel="noreferrer" target="_blank">
            View on Google Map
            </a>
          </Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid id="contact-wrapper" minChildWidth="300px" bgColor="#000C66">
        {/* <form> */}
        <Container pt={"40px"}>
          <Stack>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  [event.target.name]: event.target.value,
                })
              }
              placeholder="Full Name :"
              color="white"
            />
            <Input
              type="email"
              name="email"
              value={userData.email}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  [event.target.name]: event.target.value,
                })
              }
              placeholder="Enter Email :"
              color="white"
            />
            <Input
              type="text"
              name="subject"
              value={userData.subject}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  [event.target.name]: event.target.value,
                })
              }
              placeholder="Your Subject :"
              color="white"
            />
          </Stack>
        </Container>
        <Container pb="50px" pt={"40px"}>
          <Stack spacing={6}>
            <Textarea
              type="text"
              name="message"
              value={userData.message}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  [event.target.name]: event.target.value,
                })
              }
              placeholder="Write Your Message Here"
              color="white"
            />
            <Button
              fontWeight="800"
              onClick={handleSend}
              color="blue"
              _hover={{
                color: "white",
                border: "1px solid white",
                bgColor: "#000C66",
              }}
            >
              SEND MESSAGE
            </Button>
          </Stack>
        </Container>
        {/* </form> */}
      </SimpleGrid>
    </>
  );
};

export default Contact;
