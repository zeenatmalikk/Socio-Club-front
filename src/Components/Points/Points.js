import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useState } from "react";
import { data } from "../data";
import win from "../../image/image5.jpeg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./Points.css";
const Points = () => {
  const [scrollStatus, setscrollStatus] = useState(true);
  const data = [
    {
      first: 200,
      desc:"contest winners"
    },
    {
      first: 200,
      desc:"socio-club family"

    },
    {
      first: 200,
      desc:"contest winners"

    },
  ];

  return (
    <div className="points">
      {/* <p className="p-desc">FLEXIBLE AND EXPRESSIVE NOTE-TAKING</p> */}
      <Grid container>
        {data.map((item) => (
          <Grid item md={4} xs={12} className="label-points">
            <CountUp end={item.first} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span className="counter-anime" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <p className="counter-anime">+</p>
<p>{item.desc}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Points;
