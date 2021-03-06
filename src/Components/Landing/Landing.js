import React, {useRef, useEffect } from "react";
import "./Landing.css";

import Button from "@mui/material/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import $ from "jquery"


const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 }); //initializing gives animation to every block
  }, []);

  // let bg = useRef(null)
  // let contenth1 = useRef(null)
  // let contentp = useRef(null)
  // useEffect(()=> {
  //     timeline.to(bg,{
  //         delay: 1,
  //         duration: 2,
  //         y: "-50%",
  //         x: "-50%",
  //         opacity: 1
  //     })
  // })
  
  return (
    <div className="landing">
      <div className="home-image home-overlay" ></div>
            <div className="container-home">
                <h1 >Home Page</h1>
            </div>
      <div id="splash">
  <div class="anim">
    <div id="loader">
      <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        <g id="airplane">
          <path fill="#fff" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(44,0) rotate(90 0 0)" />
        </g>
        <g id="shadow" transform="scale(.9)">
          <path fill="#fff" fill-opacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
        </g>
      </svg>
    </div>
  </div>
</div>
 {/* <div className="content">
                <h1 ref={el => contenth1 = el}>
                    Shop Now!
                </h1>
                <p ref={el => contentp = el}>
                    New Arrivals!
                </p>
            </div>
            <img ref={el => bg = el} src='https://cdn.pixabay.com/photo/2022/01/25/12/58/conifer-6966140_960_720.jpg' alt="bg" className="background" /> */}


    </div>
  );
};

export default Landing;
