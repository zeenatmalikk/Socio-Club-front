import React from "react";
import "./Vidscreen.css";
import video from "../../image/video1.mp4";
const Vidscreen = () => {
  return (
    <div>
      {/* <video src={video} height='auto' width='auto' typeof='video/mp4' loop/> */}
      {/* <video src={video} width="600" height="300" controls="controls" autoplay="true" /> */}
      <video loop autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Vidscreen;
