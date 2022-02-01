import React from "react";
import Lottie from "lottie-react";

import "./Grid.css";
const Grids = ({ item }) => {
  return (
    <div>
      <div className={item.cName}>
        <div className="image">
          <img src={item.img} alt="" />
        </div>

        <div className="content">
          <h2>{item.title}</h2>
          <p>
           {item.desc}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Grids;
