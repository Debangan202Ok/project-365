import SideVidSugg from "../sidevid/Sidevidsugg";
import CommentArea from "./watchcomponents/Commentbox";
import Utilsbtns from "./watchcomponents/Utilsbtns";
import Vidtitle from "./watchcomponents/Vidtitle";

const WatchArea = () => {
  return (
    <div className="w-full flex border-2 overflow-hidden border-blue-300">
      <section className="w-[900px]  border-2 border-black">
        <div className="h-[500px] border-2 rounded-md bg-gray-200">
          <img src="" alt="thumbail" />
        </div>
        <div className="mx-2">
          <Vidtitle />
          <Utilsbtns />
        </div>
        <CommentArea />
      </section>
      <section className=" p-2 border-2 w-fit mx-2  overflow-x-hidden border-red-500">
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
        <SideVidSugg />
      </section>
    </div>
  );
};

export default WatchArea;
