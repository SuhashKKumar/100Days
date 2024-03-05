import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import "../styles/SocialMediaIcons.css";
const SocialMediaICons = () => {
  const icons = [
    {
      id: 1,
      icon: facebook,
      altText: "facebook-icon",
    },
    {
      id: 2,
      icon: instagram,
      altText: "instagram-icon",
    },
    {
      id: 3,
      icon: twitter,
      altText: "twitter-icon",
    },
  ];

  return (
    <div className="social-media-icons-container">
      {icons.map(({ id, icon, altText }) => (
        <img key={id} src={icon} alt={altText} className="social-icons" />
      ))}
    </div>
  );
};

export default SocialMediaICons;
