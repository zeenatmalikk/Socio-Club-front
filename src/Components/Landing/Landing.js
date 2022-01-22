import React from "react";
import "./Landing.css";
import Button from "@mui/material/Button";




const Landing = () => {
  return (
    <div className="landing">
      <h1 className="title-l">Think better</h1>
      <h1 className="title2-l">Achieve more</h1>
      <p className="desc-l">
        Clover is a digital notebook that blends notes, tasks, whiteboards, and
        a daily planner into one streamlined app.
      </p>
      <button className="btn-l" variant="contained">Get started</button>
      <p className="l-avail">
        Available on Mac, Windows, iPad, iPhone, and the web.
      </p>
    </div>
  );
};

export default Landing;
