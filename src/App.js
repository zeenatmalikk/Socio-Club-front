import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Screen from "./Components/Appscreen/Screen";
import Vidscreen from "./Components/VidScreen/Vidscreen";
import Points from "./Components/Points/Points";
import Review from "./Components/Review/Review";
import About from "./Components/About/About";
import GridFeature from "./Components/GridFeature/GridFeature";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import gsap from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  let timeline = gsap.timeline();
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar timeline={timeline} />
      <Landing />
      {/* <Vidscreen/> */}
      <Screen />
      <Points />
      <GridFeature />
      <Review />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Points />} />
        <Route path="/features" element={<GridFeature />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Footer />} />
      </Routes> */}
    </div>
  );
}

export default App;
