import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";

const App = () => {
  return (
    <div className="relative" >
      <Navbar />
      <Hero />
      <VideoSection />
      
      <HowItWorks />
    </div>
  );
};

export default App;
