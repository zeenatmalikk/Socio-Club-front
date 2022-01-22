import React from "react";
import "./Screen.css";

import image2 from "../../image/image2.jpeg";
const Screen = () => {
  return (
    <div className="screen">
      <div class="smartphone">
        <div class="content">
          <img src={image2} height="auto" width="360px" />

        </div>
      </div>
    </div>
  );
};

export default Screen;
