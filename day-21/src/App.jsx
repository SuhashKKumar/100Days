import "./App.css";
import Brilliant from "./components/Brilliant";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Brilliant/>
    </>
  );
}

export default App;
