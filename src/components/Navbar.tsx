import { navigationLink } from "../util/constants";
import { styles } from "../util/style";
import { bars, logo, xmark } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id: string) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}> 
      {/* Brand Logo */}
      <a href="/">
        <img src={logo} alt="logo" className="w-[130px] cursor-pointe" />
      </a>

      {/* Navigation links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLink.map((nav, idx) => (
          <li
            key={idx}
            className={`${idx === navigationLink.length - 1 ? "mr-0" : "mr-6"}
            ${active === nav.id ? "text-white" : "text-lightWhite"}
            p-2 text-[16px] text-lightWhite font-montserrat font-normal cursor-pointer hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navbar buttons */}
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img
          src={toggleNav ? xmark : bars}
          alt="nav-button"
          className={"w-[30px] object-contain fill-white"}
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 w-full absolute top-[8rem] left-0 right-0 bg-black-gradient sidebar z-[99]`}
        >
          <ul className="list-none flex flex-1 flex-col justify-center items-center">
            {navigationLink.map((nav, idx) => (
              <li
                key={idx}
                className={`${
                  active === nav.id ? "text-white" : "text-lightWhite"
                }
                p-2 text-[16px] text-lightWhite font-montserrat font-normal cursor-pointer hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
