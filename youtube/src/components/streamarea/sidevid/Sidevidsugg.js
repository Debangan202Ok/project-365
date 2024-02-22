import Vidtitle from "../watches/watchcomponents/Vidtitle";

const SideVidSugg = () => {
  return (
    <div className="flex">
      <div className="w-[200px] h-[120px] rounded-md bg-gray-200"></div>
      <div className="truncate mx-2">
        <Vidtitle />
      </div>
    </div>
  );
};

export default SideVidSugg;
