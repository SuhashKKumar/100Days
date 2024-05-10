import "./App.css";
import Brilliant from "./components/Brilliant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Brilliant/>
      <Portfolio/>
      <hr/>
    </>
  );
}

export default App;
