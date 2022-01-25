import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { data } from "../data";
import "./Points.css";
const Points = () => {
  return (
    <div className="points">
      <p className="p-desc">FLEXIBLE AND EXPRESSIVE NOTE-TAKING</p>
      <h1 className="p-title">
        Write, sketch, and embed on an infinite canvas.
      </h1>
      <p className="p-desc2">
        Traditional text docs are great for writing, but thinking requires
        something more. Introducing the Surface – a new type of document that
        combines the power of a text editor with the flexibility of a whiteboard
        for better brainstorming, enhanced memory, intuitive organization, and
        workflows you simply can’t do elsewhere
      </p>
        <Grid container style={{width:'90%',margin:'20px 0'}}>
          {data.map((item) => (
            <Grid item md={4} xs={12}>
              <div className="card-p">
                <div className="icon-p">{item.icon}</div>
                <h2 className="title-c-p">{item.title}</h2>
                <h2 className="desc-c-p">{item.desc}</h2>
              </div>
            </Grid>
          ))}
        </Grid>
    </div>
  );
};

export default Points;
