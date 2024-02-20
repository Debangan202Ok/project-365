import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";

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
      <ul className="flex-1 my-2">{children}</ul>
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

export default SidenavBar;
