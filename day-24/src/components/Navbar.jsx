import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="px-3 py-4">
      <div
        className="hamburger-lines flex flex-col gap-1 md:hidden cursor-pointer "
        onClick={menuHandler}
      >
        <div className={`hamburger-line ${showMenu?"rotate-45 translate-y-[6px]":"rotate-0"} `}></div>
        <div className={`hamburger-line ${showMenu?"-rotate-45 ":"rotate-0"} `}></div>
        <div className={`hamburger-line ${showMenu?"hidden":"rotate-0"} `}></div>
      </div>
      <div className={`bg-white p-4 absolute inset-0 z-10 mt-12 ${showMenu? "-translate-x-0" :"-translate-x-[50rem]"}  md:translate-x-0 md:static md:bg-transparent md:flex md:items-center md:justify-between md:mt-0 md:pt-0`}>
        <img
          src="/assets/logo.svg"
          alt="ipsum logo"
          className="h-10 hidden md:block"
        />
        <div className="nav-items flex flex-col gap-3 md:flex-row md:items-center md:gap-8 ">
          <div className="nav-item cursor-pointer font-semibold">About Us</div>
          <div className="nav-item cursor-pointer font-semibold">Our offerings</div>
          <div className="nav-item cursor-pointer font-semibold">Pricing</div>
        </div>
        <div className="nav-buttons flex items-center justify-center mt-4 gap-3 md:mt-0 ">
          <button className="nav-button px-6 py-2 bg-transparent border border-1 border-transparent hover:border-black hover:bg-black hover:text-white font-semibold">
            Log In
          </button>
          <button className="nav-button px-6 py-2 bg-transparent border border-1 border-black hover:bg-black hover:text-white font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
