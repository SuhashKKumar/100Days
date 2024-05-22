const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-3 ">
      <div className="flex items-center gap-5 md:justify-end ">
        <div className="hamberger inline-block cursor-pointer md:hidden ">
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
        <div className="nav-items text-sm mt-1 md:flex items-center mx-4 gap-4 absolute md:static w-fit inset-0 ">
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer">
            Microsoft 365
          </div>
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer">
            Teams
          </div>
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer">
            Copilot
          </div>
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer">
            Windows
          </div>

          <select
            name="More"
            id="More"
            className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer inline-block lg:hidden bg-transparent "
          >
          <option value="" selected disabled hidden>More</option>
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

          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer hidden lg:inline-block ">
            Surface
          </div>
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer hidden lg:inline-block ">
            Xbox
          </div>
          <div className="nav-item w-fit border-solid hover:border-blue-950 border-b-2 border-transparent cursor-pointer hidden lg:inline-block ">
            Support
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 md:order-last mt-1 ">
        <img
          src="/assets/search-icon.svg"
          alt="Search"
          className="w-6 hidden md:block"
        />
        <img src="/assets/cart-icon.svg" alt="Cart" className="w-6 " />
        <img src="/assets/user-icon.svg" alt="User Account" className="w-6 " />
      </div>
    </nav>
  );
};

export default Navbar;
