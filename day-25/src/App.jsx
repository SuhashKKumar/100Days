import Databases from "./components/Databases";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import IceBreakers from "./components/IceBreakers";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";

const App = () => {
  return (
    <div className="relative" >
      <Navbar />
      <Hero />
      <VideoSection />
      <HowItWorks />
      <Databases/>
      <IceBreakers/>
      
      <Footer/>
    </div>
  );
};

export default App;
