import Image from "next/image";
import logo from "/public/_assets/logos/logo1.svg";
const Logo = () => {
    return <Image src={logo} width={130} height={100} alt="testimonial" />;
};

export default Logo;
