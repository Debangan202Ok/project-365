import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WatchArea from "../components/streamarea/watches/Watcharea";
import MostPopular from "../components/streamarea/Popularvid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Elemet not found</h1>,
    children: [
      {
        path: "/",
        element: <MostPopular />,
      },
      {
        path: "/watches/:id",
        element: <WatchArea />,
      },
      {
        path: "/subscriptions",
        element: <h1>Subscription</h1>,
      },
    ],
  },
]);
