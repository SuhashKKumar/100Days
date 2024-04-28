import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Supporters from "./components/Supporters";
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
    </div>
  );
}

export default App;
