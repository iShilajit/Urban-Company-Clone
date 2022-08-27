import "./Video.css";
import React from "react";
import { Carousel } from "react-bootstrap";

import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const Videocaraousal = ({videoProperties}) => {
    console.log("Video",videoProperties)
    return (
      <div className="App">
        <Carousel>
          {videoProperties?.map((videoObj) => {
            return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                  url={videoObj.vid}
                  pip={true}
                  controls={true}
                  playing={true}
                  muted={true}
                />
               
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  };

export default Videocaraousal