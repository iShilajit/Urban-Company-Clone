import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/Rabi/images/bathroomCleaning.jpg";
import b from "../../Pages/Rabi/images/fullhomecleaning.jpg";
import c from "../../Pages/Rabi/images/sofacleaning.jpg";
import d from "../../Pages/Rabi/images/cockroachcleaning.jpg";
import e from "../../Pages/Rabi/images/bedbugcontrol.jpg";
import f from "../../Pages/Rabi/images/termitecontrol.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OfferPage.css";

export const CleaningAndPestControl = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Box ml="170px" height="500px">
    <h1 style={{ fontSize: "50px" }}>Cleaning & Pest Control</h1>
      <Box style={{ marginTop: "100px", width: "1200px" }}>
        <Slider {...settings}>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={a}></img>
            </div>
            <p>Bathroom And Carpet Cleaning</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={b}></img>
            </div>
            <p>Full Home Cleaning</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={c}></img>
            </div>
            <p>Sofa & Carpet Cleaning</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={d}></img>
            </div>
            <p>Cockroach, Ant & General Pest Control</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={e}></img>
            </div>
            <p>Bed Bugs Control</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={f}></img>
            </div>
            <p>Termite Control</p>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};
