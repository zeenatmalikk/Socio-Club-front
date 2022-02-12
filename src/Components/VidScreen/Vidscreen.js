import React from "react";
import "./Vidscreen.css";
import video from "../../image/video1.mp4";
import { Tween } from "gsap/gsap-core";
const Vidscreen = () => {
  
  Tween.to('.left', 2, {
    delay: .8,
    width: '50%',
    ease: "Power2.easeInOut"
  })

  Tween.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: "Power3.easeInOut"
  })

  Tween.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: "Expo.easeInOut"
  })

  Tween.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: "Circ.easeInOut"
  })

  Tween.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: "Circ.easeInOut"
  })

  Tween.to('.karina', 2, {
    delay: 1.5,
    width: '800px',
    ease: "Power2.easeInOut"
  })

  Tween.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: "Circ.easeInOut"
  }, 0.08)

  Tween.from('.info', 2, {
    delay: 1.5,
    y: 100,
    ease: "Circ.easeInOut"
  })

  Tween.from('.name', 2, {
    delay: 1.5,
    x: -600,
    ease: "Circ.easeInOut"
  })
  return (
    <div>
      <div class="wrapper-new">
    <div class="left-new"></div>
    <div class="right-new"></div>

    <nav class="nav-new">
      <ul>
        <li class="logo-new">unsplash</li>
        <li class="menu-new"><i class="fa fa-bars"></i></li>
        <li class="collection">collection</li>
        <li class="explore">explore</li>
        <li class="search">search</li>
        <li class="profile">
          <div class="img"></div>
        </li>
      </ul>
    </nav>

    <div class="content">
      <div class="img-wrapper">
        <div class="karina"></div>
      </div>

      <div class="info">
        <ul>
          <li>unsplash.com</li>
          <li>@karinates</li>
          <li>karinates.com</li>
          <li><i class="fa fa-share-alt"></i></li>
        </ul>
      </div>

      <div class="text">
        <h1>karina tes</h1>
        <p>Fashion Photographer</p>
      </div>

      <div class="name">karina tes</div>

      <div class="bottomnav">
        <ul>
          <li>profile</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Vidscreen;
