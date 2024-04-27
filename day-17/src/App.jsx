import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Supporters from "./components/Supporters";
import TopHeader from "./components/TopHeader";
function App() {
  return (
    <div>
      <TopHeader />
      <div className="hero-bg">
        <Navbar />
        <Hero />
        <Supporters/>
      </div>
    </div>
  );
}

export default App;
