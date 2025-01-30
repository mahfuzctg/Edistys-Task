import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import NotFound from "../pages/NotFound/notFound";
import { routeGenerator } from "../utils/RouteHandler";
import { pageRoutes } from "./route.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(pageRoutes),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
