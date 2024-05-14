import "./App.css";
import Brilliant from "./components/Brilliant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Allies from "./components/Allies";
import Team from "./components/Team";
function App() {
  return (
    <div className="main-bg" >
      <Navbar />
      <Hero/>
      <Brilliant/>
      <Portfolio/>
      <hr/> 
      <Allies/>
      <hr/> 
      <Team/>
      <hr/> 
    </div>
  );
}

export default App;
