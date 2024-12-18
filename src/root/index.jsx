import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "../componets/protect-route";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
export const route = createBrowserRouter([
  {
    path: "/",
    element: <ProtectRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
