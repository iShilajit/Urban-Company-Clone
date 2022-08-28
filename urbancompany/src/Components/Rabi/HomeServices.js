import React from "react";
import g from "../../Pages/Rabi/logoes/appliance_repair.png";
import h from "../../Pages/Rabi/logoes/Home painting.png";
import i from "../../Pages/Rabi/logoes/cleaning & pest.png";
import j from "../../Pages/Rabi/logoes/disinfecion.png";
import k from "../../Pages/Rabi/logoes/home repairs.png";
import { Flex, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HomeServices = () => {
  return (
    <div>
      <div style={{ marginTop: "180px", fontSize: "45px" }}>Home Services</div>

      <Box
        style={{
          height: "180px",
          backgroundColor: "white",
          width: "65%",
          marginTop: "80px",
          marginLeft: "290px",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Flex
          style={{
            justifyContent: "space-between",
            marginTop: "40px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <RouterLink to="/services">
            <Box style={{ marginTop: "40px" }}>
              <img
                src={g}
                alt="appliance_repair"
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
              ></img>
              <h6>Appliance Repair</h6>
            </Box>
          </RouterLink>
          <RouterLink to="/services">
            <Box style={{ marginTop: "40px" }}>
              <img
                src={h}
                alt="home painting"
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
              ></img>
              <p>Home Painting</p>
            </Box>
          </RouterLink>
          <RouterLink to="/services">
            <Box style={{ marginTop: "40px" }}>
              <img
                src={i}
                alt="cleaning & pest"
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
              ></img>
              <p>Cleaning & Pest</p>
            </Box>
          </RouterLink>
          <RouterLink to="/services">
            <Box style={{ marginTop: "40px" }}>
              <img
                src={j}
                alt="disinfection"
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
              ></img>
              <p>Disinfection</p>
            </Box>
          </RouterLink>
          <RouterLink to="/services">
            <Box style={{ marginTop: "40px" }}>
              <img
                src={k}
                alt="home repairs"
                style={{ height: "70px", width: "70px", marginLeft: "40px" }}
              ></img>
              <p>Home Repairs</p>
            </Box>
          </RouterLink>
        </Flex>
      </Box>
    </div>
  );
};

export default HomeServices;
