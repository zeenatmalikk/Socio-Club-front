import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing';
import Screen from './Components/Appscreen/Screen';
import Vidscreen from './Components/VidScreen/Vidscreen';
import Points from './Components/Points/Points';
import Review from './Components/Review/Review';
import About from './Components/About/About';

function App() {
  return (
    <div>
     <Landing/>
     {/* <Vidscreen/> */}
     <Screen/>
     <Points/>
     <Review/>
     <About/>
    </div>
  );
}

export default App;
