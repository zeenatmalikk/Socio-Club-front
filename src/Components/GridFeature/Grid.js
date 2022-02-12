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
    <div >
      <div className={item.cName}>
        <div className='icon-svg'>
          {item.img}
        </div>
      </div>
       

    </div>
  );
};

export default Grids;
