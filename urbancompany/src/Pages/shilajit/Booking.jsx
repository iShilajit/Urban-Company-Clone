import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Flex, Text, useToast } from "@chakra-ui/react";
import Navbar from '../../Components/shilajit/Navbar';
const Booking = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const handleClick = () => {
      navigate("/allservices",{replace: true});
    };
    const handlego=()=>{
        navigate("/cart",{replace: true});
    }
    const handlehist=()=>{
        // navigate("/",{replace: true});
        toast({
            title: "Product History",
            position: "top",
            description: "No History Found ✌️",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
    }
  return (
    <div>
        <Box>
        <Navbar/>
        <Container mt={"20"} textAlign={"center"} border={"1px solid red"}>
        <Text fontWeight={"bold"} fontSize={"x-large"} letterSpacing={"widest"}>
          My Bookings
        </Text>
        <Flex justifyContent={"center"} mt={"5"}>
          <Button
          onClick={handlego}
            bg={"blackAlpha.900"}
            color={"whiteAlpha.900"}
            _hover={{
              background: "whiteAlpha.900",
              color: "blackAlpha.900",
              border: "2px solid black",
            }}
          >
            ONGOING
          </Button>
          <Button
          onClick={handlehist}
            bg={"whiteAlpha.900"}
            border={"2px solid black"}
            _hover={{
              background: "blackAlpha.900",
              color: "whiteAlpha.900",
              border: "2px solid black",
            }}
          >
            HISTORY
          </Button>
        </Flex>

        <Container mt={"20"}>
          <Text fontWeight={"medium"}>
            You don't have any active projects right now
          </Text>
        </Container>
        <Button
          letterSpacing={"0.6em"}
          bg={"blackAlpha.900"}
          color={"whiteAlpha.900"}
          _hover={{
            background: "whiteAlpha.900",
            color: "blackAlpha.900",
            border: "2px solid black",
          }}
          mt={"5"}
          onClick={handleClick}
        >
          BOOK A SERVICE
        </Button>
      </Container>
        </Box>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Booking