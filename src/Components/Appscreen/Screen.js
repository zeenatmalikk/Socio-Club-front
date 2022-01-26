import React,{useEffect} from "react";
import "./Screen.css";
import image3 from "../../image/image3.jpeg";
import image1 from "../../image/image1.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import image2 from "../../image/image2.jpeg";
import { Grid } from "@mui/material";
const Screen = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); //initializing gives animation to every block
  }, []);
  return (
    <div>
      <Grid container>
        <Grid data-aos='fade-down' item md={4} xs={12} className="center-s-g">
          <img src={image1} className="img1-s"/>
        </Grid>
        <Grid item md={4} xs={12} className="center-s-g">
        <div class="smartphone">
            <div class="content">
              <img src={image2} height="auto" width="360px" />
            </div>
          </div>
        </Grid>
        <Grid data-aos='fade-up' item md={4} xs={12}>
          <img src={image3} className="img2-s"/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Screen;
/* <div class="smartphone">
            <div class="content">
              <img src={image2} height="auto" width="360px" />
            </div>
          </div> */