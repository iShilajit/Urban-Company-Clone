import React from "react";
import A from "./images/AcCleaning.jpg";
import b from "./logoes/salon for women.jpg";
import c from "./logoes/hair skin and nails.png";
import d from "./logoes/women's therapies.png";
import e from "./logoes/salon for men.png";
import f from "./logoes/men's therapies.png";
// import g from "./logoes/appliance_repair.png";
// import h from "./logoes/Home painting.png";
// import i from "./logoes/cleaning & pest.png";
// import j from "./logoes/disinfecion.png";
// import k from "./logoes/home repairs.png";
import { Flex, Box } from "@chakra-ui/react";
import HomeServices from "../../Components/Rabi/HomeServices";
import OfferPage from "../../Components/Rabi/OfferPage";
import NewCategoryLunches from "../../Components/Rabi/NewCategoryLunches";
import Appliances from "../../Components/Rabi/Appliances";
import { SalonServices } from "../../Components/Rabi/SalonServices";
import { Link as RouterLink } from "react-router-dom";
import { CleaningAndPestControl } from "../../Components/Rabi/CleaningAndPestControl";
import LuxuryExperience from "../../Components/Rabi/LuxuryExperience";
import HomeRepair from "../../Components/Rabi/HomeRepair";
import Navbar from "../../Components/shilajit/Navbar";
const AllServices = () => {
  const location = localStorage.getItem("location");
  console.log(location)
  return (
    <Box bgColor="#f2f4f6">
      <Navbar />
      <Box>
        <Box>
          <img
            style={{
              height: "580px",
              width: "100%",
              filter: "brightness(60%)",
            }}
            alt="Urban Company"
            src={A}
          ></img>
        </Box>
        <Box
          style={{
            position: "absolute",
            right: "420px",
            top: "200px",
            color: "white",
          }}
        >
          <p>Home / {location}</p>
          <p
            style={{
              fontSize: "50px",
            }}
          >
            Home services, on demand.
          </p>
        </Box>
        <Box style={{ position: "absolute", top: "400px", right: "280px" }}>
          <Flex>
            <Box>
              <button
                style={{
                  height: "70px",
                  width: "200px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
               / {location}
              </button>
            </Box>
            <Box>
              <input
                style={{
                  padding: "15px",
                  marginLeft: "20px",
                  height: "70px",
                  width: "700px",
                  textTransform: "capitalize",
                  borderRadius: "5px",
                }}
                type="text"
                placeholder="Search For Services"
              />
            </Box>
          </Flex>
        </Box>
        <Box
          style={{
            height: "180px",
            backgroundColor: "white",
            width: "65%",
            marginLeft: "290px",
            position: "absolute",
            top: "600px",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
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
              <Box>
                <img
                  src={b}
                  alt="salon for women"
                  style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                ></img>
                <h6>Salon For Women</h6>
              </Box>
            </RouterLink>
            <RouterLink to="/services">
              <Box>
                <img
                  src={c}
                  alt="hair skin & nails"
                  style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                ></img>
                <p>Hair,Skin & Nails</p>
              </Box>
            </RouterLink>
            <RouterLink to="/services">
              <Box>
                <img
                  src={d}
                  alt="women's therapies"
                  style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                ></img>
                <p>Women's Therapies</p>
              </Box>
            </RouterLink>
            <RouterLink to="/services">
              <Box>
                <img
                  src={e}
                  alt="salon for men"
                  style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                ></img>
                <p>Salon For Men</p>
              </Box>
            </RouterLink>
            <RouterLink to="/services">
              <Box>
                <img
                  src={f}
                  alt="men's therapies"
                  style={{ height: "70px", width: "70px", marginLeft: "40px" }}
                ></img>
                <p>Men's Therapies</p>
              </Box>
            </RouterLink>
          </Flex>
        </Box>
      </Box>
      <HomeServices />
      <OfferPage />
      <NewCategoryLunches />
      <Appliances />
      <SalonServices />
      <CleaningAndPestControl />
      <LuxuryExperience />
      <HomeRepair />
    </Box>
  );
};

export default AllServices;
