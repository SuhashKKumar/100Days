import { useState } from "react";
import Logo from "../misc/Logo";
import { ShortLinksData } from "../lib/ShortLinksData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

const ShortLinks = () => {
  const [expanded, setExpanded] = useState({});
  const accordionHandler = (item) => {
    setExpanded({
      ...expanded,
      [item]: !expanded[item],
    });
  };
  const squareArrowUpRight = (
    <FontAwesomeIcon
      style={{ color: "#fff" }}
      icon={faSquareArrowUpRight}
      size="sm"
    />
  );
  const chevronDown = (
    <FontAwesomeIcon style={{ color: "#fff" }} icon={faChevronDown} size="sm" />
  );
  return (
    <div className="short-links--container bg-dark-blue-100 py-9 ">
      <div className="short-links--sub-container p-4 flex flex-col gap-3 md:flex-row md:items-start  ">
        <Logo />
        <div className="links--container flex flex-col md:flex-row justify-around md:w-full ">
          {ShortLinksData.map(({ id, title, firstLinks, secondLinks }) => {
            return (
              <div key={id} className="flex flex-col  text-white">
                <div
                  className="cursor-pointer font-semibold py-2 border-b flex items-center justify-between border-white md:border-0"
                  onClick={() => accordionHandler(id)}
                >
                  <span>{title}</span>
                  <span className="ml-2 text-lg md:hidden">
                    {expanded[id] ? "-" : "+"}
                  </span>
                </div>
                <ul
                  className={`p-4 flex justify-between md:block md:p-0 ${
                    expanded[id] ? "block" : "hidden"
                  }`}
                >
                  <div>
                    {firstLinks.map((link, index) => {
                      return (
                        <li
                          key={`${link.name}-${index}`}
                          className="text-sm capitalize flex items-center gap-2"
                        >
                          <span>{link.name}</span>
                          {link.icon &&
                          link.iconName === "faSquareArrowUpRight" ? (
                            squareArrowUpRight
                          ) : link.icon && link.iconName === "faChevronDown" ? (
                            chevronDown
                          ) : (
                            <></>
                          )}
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    {secondLinks.map((link, index) => {
                      return (
                        <li
                          key={`${link.name}-${index}`}
                          className="text-sm capitalize justify-end text-right md:justify-start flex items-center gap-1"
                        >
                          <span>{link.name}</span>
                          {link.icon &&
                          link.iconName === "faSquareArrowUpRight" ? (
                            squareArrowUpRight
                          ) : link.icon && link.iconName === "faChevronDown" ? (
                            chevronDown
                          ) : (
                            <></>
                          )}
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShortLinks;
