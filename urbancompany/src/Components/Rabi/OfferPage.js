import React from "react";
import a from "../../Pages/Rabi/images/bighomerush.jpg";
import b from "../../Pages/Rabi/images/waxing.jpg";
import c from "../../Pages/Rabi/images/spotless.jpg";
import d from "../../Pages/Rabi/images/homepainting.jpg";
import e from "../../Pages/Rabi/images/spawome.jpg";
import f from "../../Pages/Rabi/images/salonmen.jpg";
import g from "../../Pages/Rabi/images/acrepair.jpg";
import { Flex, Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const OfferPage = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Box style={{ marginTop: "100px" }}>
      {/* <Flex>
        <img alt="Big Home Rush" src={a}></img>
        <img alt="Big Home Rush" src={b}></img>
        <img alt="Big Home Rush" src={c}></img>
        <img alt="Big Home Rush" src={d}></img>
        <img alt="Big Home Rush" src={e}></img>
        <img alt="Big Home Rush" src={f}></img>
        <img alt="Big Home Rush" src={g}></img>
      </Flex> */}
      <Slider {...settings}>
        <div>
          <div>
            <img alt="Big Home Rush" src={a}></img>
          </div>
        </div>
        <div>
          <div>
            <img alt="Big Home Rush" src={b}></img>
          </div>
        </div>
        <div>
          <div>
            <img alt="Big Home Rush" src={c}></img>
          </div>
        </div>
        <div>
          <div>
            <img alt="Big Home Rush" src={d}></img>
          </div>
        </div>
      </Slider>
    </Box>
  );
};

export default OfferPage;
