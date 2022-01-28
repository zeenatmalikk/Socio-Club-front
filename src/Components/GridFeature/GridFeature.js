import {  Grid } from "@mui/material";
import Container from "@mui/material/Container"
import Lottie from "lottie-react";
import game from "../../lottie/game.json"
import React from "react";
import "./Grid.css";
const GridFeature = () => {
  return (
    <div>
     <Container  >
     <Grid container style={{margin:'5% 0'}}>
         <Grid item md={4} xs={12} >
<div className="grid-f1">

</div>
         </Grid>
         <Grid item md={4} xs={12} className="grid-f2">
<div className="grid-f2">
         
             
         </Grid>
         <Grid item md={4} xs={12} className="grid-f3"></Grid>
     </Grid>
     </Container>
    </div>
  );
};

export default GridFeature;
