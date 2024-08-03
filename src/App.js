import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import College from "./Components/College/College";
import Sponsor from "./Components/Sponsor/Sponsor";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <College/>
      <Sponsor/>
    </div>
  );
}

export default App;
