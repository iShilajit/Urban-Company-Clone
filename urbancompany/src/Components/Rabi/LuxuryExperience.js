import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/Rabi/images/salonluxe.jpg";
import b from "../../Pages/Rabi/images/salonformenroyal.jpg";
import c from "../../Pages/Rabi/images/spaluxe.jpg";
import d from "../../Pages/Rabi/images/megformenroyal.jpg";

const LuxuryExperience = () => {
  return (
    <Box height="550px">
      <h1 style={{ fontSize: "50px" }}>UC Luxury Experience</h1>
      <p>Top Professionals | Best Brands | Premium Experience</p>
      <Flex mt="100px" ml="180px" gap="50px">
        <Box>
          <img
            style={{ height: "200px" }}
            width="350px"
            alt="Big Home Rush"
            src={a}
          ></img>
          <p>Salon Luxe</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={b}
          ></img>
          <p>Salon For Men Royal</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={c}
          ></img>
          <p>Spa Luxe</p>
        </Box>
        <Box>
          <img
            style={{ height: "200px"}}
            width="350px"
            alt="Big Home Rush"
            src={d}
          ></img>
          <p>Message Therapy For Men Royal</p>
        </Box>
      </Flex>
    </Box>
  )
}

export default LuxuryExperience