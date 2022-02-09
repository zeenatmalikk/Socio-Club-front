import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../image/logo.jpeg";
const Footer = () => {
  return (
    <div className="footer" >
      <Grid container >
        <Grid item md={4} xs={12} className='footer-align'>
          {/* <h2 className="follow-f">follow Us</h2> */}
          <div className="app-link">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="app-link">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="app-link">
          <i class="fab fa-facebook-f"></i>
          </div>
          <div className="app-link">
          <i class="fab fa-youtube"></i>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className="logo-f">
            <img src={logo} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
