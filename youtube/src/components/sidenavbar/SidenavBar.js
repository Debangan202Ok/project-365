import React, { useState, createContext, useContext } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const SideNavContext = createContext();

const SidenavBar = ({ children }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav
      className={`flex flex-col border-r-[0.5px] px-2 ${
        show === true
          ? "w-[60px] transition-all duration-700"
          : "w-[300px] transition-all duration-700"
      }`}
    >
      <header className="flex items-center justify-between relative border-b-2">
        {show || (
          <span className="transition-opacity duration-1000 text-xl font-bold">
            Menu
          </span>
        )}
        <span onClick={showHandler} className="transition-all ">
          <MenuOpenIcon fontSize="large" />
        </span>
      </header>
      {/* navitems */}
      <SideNavContext.Provider value={show}>
        <ul className="flex-1 my-2">{children}</ul>
      </SideNavContext.Provider>
      {/* navitems  */}
      <footer className="flex my-2 border-t-[0.5px] pt-2">
        <div>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            D
          </Avatar>
        </div>
        <div
          className={`flex flex-col justify-center mx-2 text-nowrap leading-[1rem] ${
            show === true ? "hidden" : ""
          }`}
        >
          <span>Name title</span>
          <span>Version..</span>
        </div>
      </footer>
    </nav>
  );
};

export const Sidenavitems = () => {
  const showData = useContext(SideNavContext);
  return (
    <a
      href="/"
      className="flex border-[0.5px] rounded-md items-center justify-center hover:bg-purple-500 hover:text-white transition-color duration-200"
    >
      <div>
        <HomeOutlinedIcon fontSize="large" />
      </div>
      <div
        className={`flex-1 mx-2 ${
          showData === true ? "hidden" : ""
        }`}
      >
        <span className="font-bold text-xl">Home</span>
      </div>
    </a>
  );
};

export default SidenavBar;
