import Navbar from "./components/Navbar";
import GlobalBanner from "./components/GlobalBanner";
import HeroCarousel from "./components/HeroCarousel";
import Promotions from "./components/Promotions";

const App = () => {
  return (
    <>
      <Navbar />
      <GlobalBanner />
      <HeroCarousel />
      <Promotions />
    </>
  );
};

export default App;
