import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./RootLayout";
import SplashScreenLayout from "./SplashScreenLayout";
import DefaultRedirect from "./DefaultRedirect";
import GuestLayout from "../route-guest/GuestLayout";
import GuestAbout from "../route-guest/GuestAbout";
import GuestError404 from "../route-guest/GuestError404";
import GuestLogin from "../route-guest/GuestLogin";
import PrivLayout from "../route-priv/PrivLayout";
import PrivAbout from "../route-priv/PrivAbout";
import PrivError404 from "../route-priv/PrivError404";
import PrivHome from "../route-priv/PrivHome";
import PrivWallet from "../route-priv/PrivWallet";
import PrivLogout from "../route-priv/PrivLogout";

export const appRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <SplashScreenLayout /> },
      { path: "/default", element: <DefaultRedirect /> },
      {
        path: "/guest",
        element: <GuestLayout />,
        children: [
          { index: true, element: <PrivError404 /> },
          { path: "login", element: <GuestLogin /> },
          { path: "about", element: <GuestAbout /> },
          { path: "*", element: <GuestError404 /> },
        ],
      },
      {
        path: "/priv",
        element: <PrivLayout />,
        children: [
          { index: true, element: <PrivError404 /> },
          { path: "home", element: <PrivHome /> },
          { path: "wallet", element: <PrivWallet /> },
          { path: "logout", element: <PrivLogout /> },
          { path: "about", element: <PrivAbout /> },
          { path: "*", element: <PrivError404 /> },
        ],
      },
    ],
  },
]);
