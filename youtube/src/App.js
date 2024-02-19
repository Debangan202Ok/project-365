import Navbar from "./components/Navbar";
import Sidenavbar from "./components/SideNavbar";

const App = () => {
  return (
    <div className="mx-2">
      <Navbar />
      <section className="flex mt-4 h-[80vh]">
        <Sidenavbar />
        <div className="w-full h-full md:mx-2 border-2 rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            eaque?
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
