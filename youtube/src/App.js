import NavBar from "./components/navbar/Navbar";
import SidenavBar, { Sidenavitems } from "./components/sidenavbar/SidenavBar";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* NavBar */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation Bar */}
        <SidenavBar>
          <Sidenavitems
            icon={<HomeIcon fontSize="large" />}
            text={"Home"}
            path={"/"}
          />
          <Sidenavitems
            icon={<SubscriptionsOutlinedIcon fontSize="large" />}
            text={"Subscriptions"}
            path={"/subscriptions"}
          />
          <Sidenavitems
            icon={<AppShortcutOutlinedIcon fontSize="large" />}
            text={"Shorts"}
            path={"/shorts"}
          />
        </SidenavBar>

        {/* VideoPreview Section */}
        <section
          id="video-area"
          className="flex-1 border-2 overflow-x-hidden  overflow-y-auto m-2 "
        >
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default App;
