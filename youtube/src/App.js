import NavBar from "./components/navbar/Navbar";
import SidenavBar, { Sidenavitems } from "./components/sidenavbar/SidenavBar";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import VideoPreview from "./components/streamarea/Videopre";

const App = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* NavBar */}
      <NavBar />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation Bar */}
        <SidenavBar>
          <Sidenavitems icon={<HomeIcon fontSize="large" />} text={"Home"} />
          <Sidenavitems
            icon={<SubscriptionsOutlinedIcon fontSize="large" />}
            text={"Subscriptions"}
          />
          <Sidenavitems
            icon={<AppShortcutOutlinedIcon fontSize="large" />}
            text={"Shorts"}
          />
        </SidenavBar>

        {/* VideoPreview Section */}
        <section id="video-area" className="flex justify-center flex-wrap overflow-y-auto m-4 ">
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
          <VideoPreview />
        </section>
      </div>
    </div>
  );
};

export default App;
