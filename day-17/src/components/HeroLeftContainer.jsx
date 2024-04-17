import BlueText from "../misc/BlueText";
import GreyParagraph from "../misc/GreyParagraph";
import "../styles/HeroLeftContainer.css";

const HeroLeftContainer = () => {
  return (
    <div className="hero-left-container">
      <BlueText text="real estate" />
      <h1 className="hero-headline">Find a perfect home you love..!</h1>
      <GreyParagraph text="Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus." />
    </div>
  );
};

export default HeroLeftContainer;
