import SideVidSugg from "../sidevid/Sidevidsugg";
import CommentArea from "./watchcomponents/Commentbox";
import Utilsbtns from "./watchcomponents/Utilsbtns";
import Vidtitle from "./watchcomponents/Vidtitle";

const WatchArea = () => {
  return (
    <div className="flex">
      <section className="w-[900px] ">
        <div className="h-[500px] border-2 rounded-md bg-gray-200">
          <img src="" alt="thumbail" />
        </div>
        <div className="mx-2">
          <Vidtitle />
          <Utilsbtns />
        </div>
        <CommentArea />
      </section>
      <section className="mx-2 overflow-x-hidden">
        <SideVidSugg />
      </section>
    </div>
  );
};

export default WatchArea;
