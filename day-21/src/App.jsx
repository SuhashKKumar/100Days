import "./App.css";
import Brilliant from "./components/Brilliant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import '@fortawesome/fontawesome-svg-core/styles.css';
import Portfolio from "./components/Portfolio";
import Allies from "./components/Allies";
function App() {
  return (
    <div className="main-bg" >
      <Navbar />
      <Hero/>
      <Brilliant/>
      <Portfolio/>
      <hr/> 
      <Allies/>
    </div>
  );
}

export default App;
