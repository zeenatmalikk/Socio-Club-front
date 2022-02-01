import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import game from "../../lottie/game.json";
import React,{useEffect} from "react";
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
      <h2 className="f-title" >
      Socio Club - Social and Entertainment Super platform 

      </h2>
      <p className="feature-sc">​Features -</p>
      <Grid container style={{ margin: "5% 0" }}>
        {feature.map((item) => (
          <Grid item md={3} xs={12}>
            <Grids item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
      <div className="center-last">
      <div className="last">
        <div className="image">
          <img src="https://cdn.dribbble.com/users/5166438/screenshots/12472231/media/a4b9c3a0930401fc3fe36b50ba25685d.png?compress=1&resize=1600x1200&vertical=top" alt="" />
        </div>

        <div className="content">
          <h2> High end Chat</h2>
          <p>make Chat, Communities... With all</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GridFeature;
