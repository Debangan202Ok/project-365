import Avatar from "@mui/material/Avatar";

const Utilsbtns = () => {
  return (
    <section className="flex justify-between">
      <div className="flex items-center mt-2">
        <Avatar variant="circle mr-1">D</Avatar>
        <div className="leading-5">
          <p className="font-bold">Thugesh</p>
          <p className="text-[0.8rem]">38.1k subscribers</p>
        </div>
      </div>
      {/* like share  */}
      <div className="flex items-center mt-2">
        <div className="px-4 py-1 bg-gray-200 rounded-full">like</div>
        <div className="px-4 py-1 bg-gray-200 rounded-full mx-2">Share</div>
        <div className="px-4 py-1 bg-gray-200 rounded-full">...</div>
      </div>
    </section>
  );
};

export default Utilsbtns;
