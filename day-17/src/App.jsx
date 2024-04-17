import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
function App() {
  return (
    <div>
      <TopHeader />
      <div className="hero-bg">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
