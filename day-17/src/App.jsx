import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";
import NeighborProperties from "./components/NeighborProperties";
import Services from "./components/Services";
import Supporters from "./components/Supporters";
import Team from "./components/Team";
import TopHeader from "./components/TopHeader";
function App() {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <div className="hero-bg">
        <Hero />
      </div>
      <Supporters />
      <AboutUs />
      <Listings/>
      <Services/>
      <NeighborProperties/>
      <Team/>
    </div>
  );
}

export default App;
