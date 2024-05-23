import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar flex justify-between items-center p-3 md:px-8 lg:px-20 xl:px-28 ">
      <div className="flex items-center gap-5 md:justify-end ">
        <div
          className="hamberger inline-block cursor-pointer md:hidden"
          onClick={menuHandler}
        >
          <div className="hamberger-lines"></div>
          <div className="hamberger-lines"></div>
          <div className="hamberger-lines"></div>
        </div>
        <img
          src="/assets/search-icon.svg"
          alt="Search"
          className="w-6  md:hidden"
        />
      </div>
      <div className="flex items-center gap-1 md:order-first ">
        <img
          src="/assets/microsoft-logo.svg"
          alt="Microsoft"
          className="w-6 "
        />
        <p className="font-bold text-slate-600 text-lg">Microsoft</p>
        <div className={`nav-items text-sm mx-4 gap-4 w-1/2 inset-0 bg-gray-200 mt-14 absolute -translate-x-${showMenu?4:96} md:w-fit md:translate-x-0 md:static md:mt-1 md:flex md:items-center md:bg-transparent`}>
          <div className="nav-item my-4 mt-4 md:mt-0 md:my-0 w-fit hover:underline underline-offset-4 cursor-pointer">
            Microsoft 365
          </div>
          <div className="nav-item my-4 md:my-0 w-fit hover:underline underline-offset-4 cursor-pointer">
            Teams
          </div>
          <div className="nav-item my-4 md:my-0 w-fit hover:underline underline-offset-4 cursor-pointer">
            Copilot
          </div>
          <div className="nav-item my-4 md:my-0 w-fit hover:underline underline-offset-4 cursor-pointer">
            Windows
          </div>

          <select
            name="More"
            id="More"
            className=" hidden md:inline-block nav-item my-2 md:my-0 w-fit hover:underline underline-offset-4 cursor-pointer lg:hidden bg-transparent "
          >
            <option value="" selected disabled hidden>
              More
            </option>
            <option className="bg-transparent" value="Surface">
              Surface
            </option>
            <option className="bg-transparent" value="Xbox">
              Xbox
            </option>
            <option className="bg-transparent" value="Support">
              Support
            </option>
          </select>

          <div className="nav-item w-fit hover:underline underline-offset-4 cursor-pointer block my-4 md:my-0 md:hidden lg:inline-block ">
            Surface
          </div>
          <div className="nav-item w-fit hover:underline underline-offset-4 cursor-pointer block my-4 md:my-0 md:hidden lg:inline-block ">
            Xbox
          </div>
          <div className="nav-item w-fit hover:underline underline-offset-4 cursor-pointer block my-4 md:my-0 md:hidden lg:inline-block ">
            Support
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:order-last mt-1 ">
        <p className="hidden lg:inline-block text-sm hover:underline underline-offset-4 cursor-pointer">
          All Microsoft
        </p>
        <div className="flex item-center mt-1 xl:gap-1">
          <p className="text-sm hidden xl:inline-block hover:underline underline-offset-4 cursor-pointer">
            Search
          </p>
          <img
            src="/assets/search-icon.svg"
            alt="Search"
            className="w-6 hidden md:block"
          />
        </div>
        <div className="flex item-center mt-1 xl:gap-1">
          <p className="text-sm hidden xl:inline-block hover:underline underline-offset-4 cursor-pointer">
            Cart
          </p>
          <img src="/assets/cart-icon.svg" alt="Cart" className="w-6 " />
        </div>
        <div className="flex item-center mt-1 xl:gap-1">
          <p className="text-sm hidden xl:inline-block hover:underline underline-offset-4 cursor-pointer">
            Sign In
          </p>
          <img
            src="/assets/user-icon.svg"
            alt="User Account"
            className="w-6 "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
