import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import a from "../../Pages/Rabi/images/salonprime.jpg";
import b from "../../Pages/Rabi/images/salonformen.jpg";
import c from "../../Pages/Rabi/images/spaforwomen.jpg";
import d from "../../Pages/Rabi/images/massageformen.jpg";
import e from "../../Pages/Rabi/images/partymakeup.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OfferPage.css";

export const SalonServices = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Box ml="170px" height="550px">
    <h1 style={{ fontSize: "40px" }}>Salon, Spa and Massage Services</h1>
    <p>Hygienic & Single use products | Low-contact services</p>
      <Box style={{ marginTop: "100px", width: "1200px" }}>
        <Slider {...settings}>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={a}></img>
            </div>
            <p>Salon Prime</p>
            <p>Free Waxing</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={b}></img>
            </div>
            <p>salon For Men</p>
            <p>flat ₹100 off</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={c}></img>
            </div>
            <p>Spa For Women</p>
            <p>Free Head Massage</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={d}></img>
            </div>
            <p>Massage For Men</p>
            <p>Start At ₹499</p>
          </div>
          <div>
            <div>
              <img width="280px" alt="Big Home Rush" src={e}></img>
            </div>
            <p>Party Makeup</p>
            <p>Artists trained by Chandin Singh Studio</p>
          </div>
        </Slider>
      </Box>
    </Box>
  );
};
