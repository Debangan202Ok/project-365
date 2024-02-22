import style from "./navstyle.json";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header
      className="flex sticky top-0 bg-white z-50 justify-between items-center"
      style={style.header}
    >
      <section>
        <Link to={"/"} className="font-bold">
          DevYoutube<sup>IN</sup>
        </Link>
      </section>
      <nav className="flex justify-between items-center w-[80%]">
        <section className="flex items-center w-[60%] relative">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border shadow-inner border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Videos , Reels & More..."
              required
            />
            <button className="text-white absolute end-1 bottom-[5px] bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </section>
        <section className="flex items-center">
          <span className="mx-2">
            <NotificationsNoneOutlinedIcon fontSize="large" />
          </span>
          <span>
            <Avatar
              sx={{ bgcolor: deepOrange[500], width: 35, height: 35 }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              D
            </Avatar>
          </span>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
