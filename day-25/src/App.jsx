import Databases from "./components/Databases";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import IceBreakers from "./components/IceBreakers";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter.jsx";
import ShortLinks from "./components/ShortLinks.jsx";
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
      
      <ShortLinks/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default App;
