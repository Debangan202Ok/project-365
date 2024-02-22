import React, { useState, createContext, useContext } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SideNavContext = createContext();

const SidenavBar = ({ children }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav
      className={`flex flex-col static h-full bg-white z-10  border-r-[0.5px] px-2 ${
        show === true
          ? "w-[60px] transition-all duration-700"
          : "w-[250px] transition-all duration-700"
      }`}
    >
      <header
        className={`flex items-center py-2 ${
          show === true ? "justify-center" : "justify-between"
        } relative border-b-2`}
      >
        {show || (
          <span className="transition-opacity duration-1000 text-xl font-bold">
            Menu
          </span>
        )}
        <span onClick={showHandler} className="transition-all ">
          {show === false ? (
            <MenuOpenIcon fontSize="large" />
          ) : (
            <MenuOutlinedIcon fontSize="large" />
          )}
        </span>
      </header>
      {/* navitems */}
      <SideNavContext.Provider value={show}>
        <ul className="flex-1 my-2">{children}</ul>
      </SideNavContext.Provider>
      {/* navitems  */}
      <footer className="flex my-2 border-t-[0.5px] pt-2 ">
        <div>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            D
          </Avatar>
        </div>
        <div
          className={`flex flex-col justify-center mx-2 text-nowrap leading-[1rem] truncate text-ellipsis ${
            show === true ? "hidden" : ""
          }`}
        >
          <span className="overflow-hidden text-ellipsis">
            Debangan paul chowdhury Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium voluptates magni, sint incidunt est
            mollitia.
          </span>
          <span>1.0.0</span>
        </div>
      </footer>
    </nav>
  );
};

export const Sidenavitems = ({ icon, text }) => {
  const showData = useContext(SideNavContext);
  return (
    <a
      href="/"
      className="flex  rounded-md items-center justify-center my-2 py-1 hover:bg-purple-500 hover:text-white transition-color duration-200 active:bg-green-400"
    >
      <div>{icon}</div>
      <div className={`flex-1 mx-2 ${showData === true ? "hidden" : ""}`}>
        <span className="font-semibold text-sm">{text}</span>
      </div>
    </a>
  );
};

export default SidenavBar;
