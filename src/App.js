import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing';
import Screen from './Components/Appscreen/Screen';
import Vidscreen from './Components/VidScreen/Vidscreen';
import Points from './Components/Points/Points';

function App() {
  return (
    <div>
     <Landing/>
     {/* <Vidscreen/> */}
     {/* <Screen/> */}
     <Points/>
    </div>
  );
}

export default App;
