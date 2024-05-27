import { useState } from "react";
import { NavbarData } from "../lib/NavbarData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navExpand, setNavExpand] = useState(false);
  const navHandler = () => {
    setNavExpand(!navExpand);
  };
  return (
    <div
      className={` ${
        navExpand ? "bg-white" : "bg-sky-blue-50"
      } lg:flex lg:items-center lg:justify-between lg:p-5 lg:bg-sky-blue-50`}
    >
      <div className=" p-5 flex items-center justify-between lg:p-0">
        <h1 className="logo special-font font-bold text-4xl text-dark-blue-200 lg:text-[54px]">
          Surfe
        </h1>
        <div className="flex items-center gap-5">
          <button
            className="text-dark-blue-200 font-medium text-sm bg-sky-blue-100
    px-4 py-[10px] rounded-md lg:hidden"
          >
            Book a demo
          </button>
          <button
            className="bg-dark-blue-200 font-medium text-sm text-sky-blue-100
    px-4 py-[10px] rounded-md hidden md:inline-block lg:hidden"
          >
            Start for free
          </button>
          <div
            onClick={navHandler}
            className="hamburger-lines flex flex-col gap-[5px] lg:hidden"
          >
            <div
              className={`hamburger-line ${
                navExpand ? "rotate-45 translate-y-[6px]" : "rotate-0"
              } `}
            ></div>
            <div
              className={`hamburger-line ${
                navExpand ? "-rotate-45 translate-y-[1px] " : "rotate-0"
              } `}
            ></div>
            <div
              className={`hamburger-line ${navExpand ? "hidden" : "rotate-0"} `}
            ></div>
          </div>
        </div>
      </div>
      <hr className={`${navExpand ? "block" : "hidden"}`} />
      <div
        className={` ${
          navExpand ? "inline-block" : "hidden"
        } absolute w-full z-10 p-5 lg:p-0 lg:static lg:flex lg:gap-8 lg:mx-20`}
      >
        {NavbarData.map(({ id, title, items }) => {
          return (
            <div key={id} className="py-4 lg:flex">
              <div className="flex items-center gap-2">
                <p className="font-semibold tracking-wide text-lg inline-block text-dark-blue-200 lg:font-medium lg:text-sm">
                  {title}
                </p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="xs"
                  style={{ color: "#5c818a" }}
                  className="hidden lg:block"
                />
              </div>
              <div className="py-1">
                {items.map((item) => {
                  return (
                    <div key={item} className="lg:hidden">
                      <div className="flex items-center justify-between py-2 px-6">
                        ={" "}
                        <p className="text-[15px] text-dark-blue-200">{item}</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          size="xs"
                          style={{ color: "#5c818a" }}
                        />
                      </div>
                      <hr className="bg-sky-blue-100 mx-auto" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="bg-light-rose-100 p-6 rounded-xl flex flex-col gap-5 my-2 mb-4 text-center mx-auto lg:hidden">
          <p className="text-dark-blue-200 font-semibold text-lg mt-5">
            Make your CRM Work now.
          </p>
          <button className="free-btn">
            Start for free
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-full text-end">
        <button
          className="text-dark-blue-200 font-medium text-sm bg-sky-blue-100
    py-[10px] rounded-md lg:px-6"
        >
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
