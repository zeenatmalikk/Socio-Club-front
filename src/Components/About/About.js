import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import Swiper from "react-id-swiper";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "react-elastic-carousel";
import Lottie from "lottie-react";
import animationData from "../../lottie/victory.json";
import gameAnimation from "../../lottie/game.json";
import booksAnimation from "../../lottie/books.json";
import audiobookAnimation from "../../lottie/audiobook.json";
import speaker from "../../lottie/speakersmusic.json";
import news from "../../lottie/news.json";
import podcast from "../../lottie/podcast.json";
import radio from "../../lottie/radio.json";
import bitcoin from "../../lottie/bitcoin.json";
import meme from "../../lottie/meme.json";
import anonymous from "../../lottie/anonymous.json";
import chatbot from "../../lottie/chatbot.json";

import "./About.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
const items = [
  {
    url: gameAnimation,
  },
  {
    url: animationData,
  },
  {
    url: booksAnimation,
  },
  {
    url: audiobookAnimation,
  },
  {
    url: speaker,
  },
  {
    url: news,
  },
  {
    url: podcast,
  },
  {
    url: radio,
  },
  {
    url: bitcoin,
  },
  {
    url: meme,
  },
  {
    url: anonymous,
  },
  {
    url: chatbot,
  },
];
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

  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  return (
    <div id="about">
      <Carousel
        itemsToShow={itemsToShow}
        onNextStart={onChange}
        breakPoints={breakPoints}
        onPrevStart={onChange}
        easing="ease"
        pagination={false}
        disableArrowsOnEnd={false}
        focusOnSelect={true}
      >
        {items.map((item, idx) => (
          <div
            className="carousel"
            // style={{
            //   transition:
            //     midItemIndex === idx
            //       ? "transform 700ms ease"
            //       : "transform 300ms ease",
            //   transform: midItemIndex === idx ? "scale(2)" : "scale(1)",
            // }}
            key={item}
          >
            <Lottie height="200px" width="100%" animationData={item.url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default About;
