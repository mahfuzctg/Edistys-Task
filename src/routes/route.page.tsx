import About from "../pages/About/About";
import Home from "../pages/Home/Home";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];
