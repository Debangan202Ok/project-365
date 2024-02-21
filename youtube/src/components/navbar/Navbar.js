import style from "./navstyle.json";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center" style={style.header}>
      <section>
        <span>
          DevYoutube<sup>IN</sup>
        </span>
      </section>
      <nav className="flex justify-between items-center w-[80%]">
        <section className="flex items-center w-[60%] relative">
          <input
            type="search"
            placeholder="search"
            className="border-2 w-full p-2 rounded-md"
          />
          <span className="absolute right-0 border-l-2 px-2">
            <SearchOutlinedIcon />
          </span>
        </section>
        <section className="flex">
          <span>Notification</span>
          <span>User</span>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
