import { Grid } from "@mui/material";
import React from "react";
import { about } from "../data";
import img from "../../image/image3.jpeg"
import "./About.css";
const About = () => {
  return (
    <div >
      <Grid container>
        <Grid item md={6} xs={12} className="about" >
          <h2 className="title-a">Plan your day. Stay on task.</h2>
          <p className="desc-a">
            Clover is more than a great note-taking tool. It’s also a
            fully-fledged task manager and daily planner. Manage your work from
            beginning to end with a single tool.
          </p>
          <div className="abt">
          {
              about.map((item)=>(
                  <div className="abt-p">
                     <p className="abt-icon"> {item.icon}</p>
                      <h2 className="abt-point">{item.title}</h2>
                      <h2 className="abt-desc">{item.desc}</h2>
                  </div>
              ))
          }
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="img-abt">
            <img src={img} height='auto' width='100%'/>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
