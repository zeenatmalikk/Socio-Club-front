import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
import Swiper from "react-id-swiper";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import "./About.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const itemsToShow = 3;
const getMid = () => Math.ceil(itemsToShow / 2) - 1;

const About = () => {
  const [midItemIndex, setMidItemIndex] = useState(getMid);

  const onChange = (_, next) => {
    const mid = getMid();
    setMidItemIndex(mid + next.index);
  };
  useEffect(() => {
    Aos.init({ duration: 3000 }); //initializing gives animation to every block
  }, []);
  return (
    <div >
      {/* <Carousel breakPoints={breakPoints}  >
          <div data-aos='zoom-in' className="carousel">One</div>
          <div data-aos='zoom-in' className="carousel">Two</div>
          <div data-aos='zoom-in' className="carousel">Three</div>
          <div data-aos='zoom-in' className="carousel">Four</div>
          <div data-aos='zoom-in' className="carousel">Five</div>
          <div data-aos='zoom-in' className="carousel">Six</div>
          <div data-aos='zoom-in' className="carousel">Seven</div>
          <div data-aos='zoom-in' className="carousel">Eight</div>
        </Carousel> */}
        <Carousel
        itemsToShow={itemsToShow}
        onNextStart={onChange}
        breakPoints={breakPoints}
        onPrevStart={onChange}
      >
        {items.map((item, idx) => (
          <div className="carousel"
            style={{
              transition:
                midItemIndex === idx
                  ? "transform 700ms ease"
                  : "transform 300ms ease",
              transform: midItemIndex === idx ? "scale(2)" : "scale(1)"
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default About;
