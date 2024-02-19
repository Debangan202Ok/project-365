import React from "react";
import DropdownMenu from "./utils/dropdown";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import BasicMenu from "./utils/menudown";

function Navbar() {
  return (
    <header className="flex border-2 sticky top-2 bg-white justify-between px-2 py-2 rounded-md">
      <section className="flex items-center">
        <menu className="mr-4 rounded-full overflow-hidden hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] ">
          <MenuOpenRoundedIcon
            className="hover:bg-gray-200 transition-all  "
            fontSize="large"
          />
        </menu>
        <span className="font-bold hidden md:block">
          DevTube<sup>IN</sup>
        </span>
      </section>
      <nav className="flex w-[80%] justify-between items-center">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="w-[60%] p-2 border-2 rounded-md"
        />
        <menu className="flex">
          <span className="mr-2">
            <NotificationsNoneRoundedIcon fontSize="large" />
          </span>
          <BasicMenu />
        </menu>
      </nav>
    </header>
  );
}

export default Navbar;
