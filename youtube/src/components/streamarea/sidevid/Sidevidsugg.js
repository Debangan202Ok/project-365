import Vidtitle from "../watches/watchcomponents/Vidtitle";

const SideVidSugg = () => {
  return (
    <div className="flex mb-2">
      <div className="w-[200px] h-[120px] rounded-md bg-gray-200"></div>
      <div className=" mx-2">
        <Vidtitle />
      </div>
    </div>
  );
};

export default SideVidSugg;
