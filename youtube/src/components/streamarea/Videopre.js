import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const VideoPreview = ({thumbail,title,channelName, views, time}) => {

  return (
    <Link to={"/watches/123"} className="w-[310px] h-fit mx-2 mb-8 self-start">
      <div className="w-full h-[175px] bg-slate-200 rounded-md object-cover">
        <img src={thumbail} alt="prev" />
      </div>
      <div className="truncate mx-1">
        <h3 className="font-semibold tracking-tight leading-6 text-xl text-ellipsis text-wrap line-clamp-2">
          {title}
        </h3>
        <section className="flex items-center mt-2">
          <Avatar variant="circle mr-1" sx={{ width: 30, height: 30 }}>
            D
          </Avatar>
          <p title="thuges" className="font-semibold text-gray-600">
            {channelName}
          </p>
        </section>
        <section className="flex justify-between mt-1">
          <p>{views} views</p>
          <time>{time}</time>
        </section>
      </div>
    </Link>
  );
};

export default VideoPreview;
