import "./App.css";
import AboutUs from "./components/AboutUs";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Navbar from "./components/Navbar";
import NeighborProperties from "./components/NeighborProperties";
import QuickLinks from "./components/QuickLinks";
import Services from "./components/Services";
import Supporters from "./components/Supporters";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import TopHeader from "./components/TopHeader";
import Trending from "./components/Trending";
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
      <Listings />
      <Services />
      <NeighborProperties />
      <Team />
      <Trending />
      <Testimonials />
      <Developer/>
      <QuickLinks/>
      <Footer />
    </div>
  );
}

export default App;
