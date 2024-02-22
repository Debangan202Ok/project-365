import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VideoPreview from "../components/streamarea/Videopre";
import WatchArea from "../components/streamarea/watches/Watcharea";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Elemet not found</h1>,
    children: [
      {
        path: "/",
        element: (
          <div className=" flex flex-wrap w-fit justify-evenly ">
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
            <VideoPreview />
          </div>
        ),
      },
      {
        path: "/watches/:id",
        element: <WatchArea />,
      },
      {
        path: "/subscriptions",
        element: <h1>Subscription</h1>
      }
    ],
  },
]);
