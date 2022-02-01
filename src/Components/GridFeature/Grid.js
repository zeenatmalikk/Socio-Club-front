import React,{useEffect} from "react";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Grid.css";
const Grids = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 3000 }); //initializing gives animation to every block
  }, []);
  return (
    <div>
      <div data-aos='zoom-in' className={item.cName}>
        <div className="image">
          <img src={item.img} alt="" />
        </div>

        <div className="content">
          <h2>{item.title}</h2>
          <p>
           {item.desc}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Grids;
