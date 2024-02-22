import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const VideoPreview = () => {
  useEffect(() => {
    console.log(document.getElementById("video-area").clientWidth);
  }, []);

  return (
    <Link to={"/watches/123"} className="w-[310px] h-fit mx-2 mb-8 self-start">
      <div className="w-full h-[175px] bg-slate-200 rounded-md object-cover">
        <img src="" alt="prev" />
      </div>
      <div className="truncate mx-1">
        <h3 className="font-semibold tracking-tight leading-6 text-xl text-ellipsis text-wrap line-clamp-2">
          The indian boss season 3 in beach Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Soluta, praesentium.
        </h3>
        <section className="flex items-center mt-2">
          <Avatar variant="circle mr-1" sx={{ width: 30, height: 30 }}>
            D
          </Avatar>
          <p title="thuges" className="font-semibold text-gray-600">
            thuges
          </p>
        </section>
        <section className="flex justify-between mt-1">
          <p>3.6M views</p>
          <time>1sec ago</time>
        </section>
      </div>
    </Link>
  );
};

export default VideoPreview;
