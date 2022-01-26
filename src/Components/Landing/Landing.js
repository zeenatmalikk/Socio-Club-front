import React,{useEffect} from "react";
import "./Landing.css";
import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";



const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 }); //initializing gives animation to every block
  }, []);
  return (
    <div className="landing">
     <div data-aos='fade-down' className="landing-glass">
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
    </div>
  );
};

export default Landing;
