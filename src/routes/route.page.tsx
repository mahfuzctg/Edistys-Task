import Aboute from "../pages/Aboute/Aboute";
import Home from "../pages/Home/Home";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "aboute",
        element: <Aboute />,
      },
    ],
  },
];
