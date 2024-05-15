import "./App.css";
import Brilliant from "./components/Brilliant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Allies from "./components/Allies";
import Team from "./components/Team";
import InvestmentPlan from "./components/InvestmentPlan";
import ThoughtPieces from "./components/ThoughtPieces";
function App() {
  return (
    <div className="main-bg">
      <Navbar />
      <Hero />
      <Brilliant />
      <Portfolio />
      <hr />
      <Allies />
      <hr />
      <Team />
      <hr />
      <InvestmentPlan />
      <hr />
      <ThoughtPieces />
    </div>
  );
}

export default App;
