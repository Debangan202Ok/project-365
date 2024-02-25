import { useEffect, useState } from "react";
import VideoPreview from "./Videopre";
import { YOUTUBE_API } from "../../utils/constants";

const MostPopular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchVideos = () => {
      const api_data = fetch(YOUTUBE_API)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return res.items;
        });
      console.log(api_data);
      setData(api_data);
    };
    fetchVideos();
  }, []);

  return (
    <div className=" flex flex-wrap w-fit justify-evenly ">
      <VideoPreview title={data[0]?.snippet?.localized?.title} />
    </div>
  );
};

export default MostPopular;
