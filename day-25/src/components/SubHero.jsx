import LogoSlider from "../misc/LogoSlider";
import HeroInfo from "./HeroInfo";



const SubHero = () => {
  return (
    <div className="max-w-full md:flex md:items-start  md:justify-between md:my-20 md:px-6 ">
      <LogoSlider />
      <HeroInfo/>
    </div>
  );
};

export default SubHero;
