import NavBar from "./components/navbar/Navbar";
import SidenavBar from "./components/sidenavbar/SidenavBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="flex flex-1">
        <SidenavBar>
          <h1>hello</h1>
        </SidenavBar>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores asperiores nulla consequuntur voluptatum, nostrum possimus
          fugit iusto modi vitae.
        </h1>
      </div>
    </div>
  );
};

export default App;
