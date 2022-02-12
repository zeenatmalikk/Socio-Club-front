import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import game from "../../lottie/game.json";
import React, { useEffect } from "react";
import "./Grid.css";
import { feature } from "../data";
import Grids from "./Grid";
import Aos from "aos";
import "aos/dist/aos.css";

const GridFeature = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 }); //initializing gives animation to every block
  }, []);
  return (
    <div>
      <h2 className="f-title">
        Socio Club - Social and Entertainment Super platform
      </h2>
      <p className="feature-sc">​Features -</p>
      <Grid container style={{ marginTop: "2%" }}>
        {feature.map((item) => (
          <Grid item md={2} xs={12}>
            <Grids item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridFeature;
