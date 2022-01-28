import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Screen from "./Components/Appscreen/Screen";
import Vidscreen from "./Components/VidScreen/Vidscreen";
import Points from "./Components/Points/Points";
import Review from "./Components/Review/Review";
import About from "./Components/About/About";
import GridFeature from "./Components/GridFeature/GridFeature";



function App() {
  
  return (
    <div>
      <Landing />
      {/* <Vidscreen/> */}
      < Screen />
      <GridFeature />
      <Review />
      {/* <About /> */}
    </div>
  );
}

export default App;
