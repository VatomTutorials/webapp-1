import { NavBarProps } from "../components/NavTypes";
import { NavBar } from "../components/NavBar";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Common.css";

export function GuestFooter() {
  const routerLocation = useLocation();
  const { pathname } = routerLocation;
  const intialRoute = pathname === "/" ? "/home" : pathname;
  console.log(
    `GuestFooter pathname: ${pathname} -- intialRoute: ${intialRoute}`
  );
  const [currentRoute, setCurrentRoute] = React.useState<string>(intialRoute);
  const navigate = useNavigate();
  const handleNavChange = (newRoute: string) => {
    setCurrentRoute(newRoute);
    navigate(newRoute);
  };
  const itemConfigArray = [
    { label: "Login", route: "/guest/login" },
    { label: "About", route: "/guest/about" },
  ];

  const footerNavBarProps: NavBarProps = {
    itemConfigs: itemConfigArray,
    currentItemRoute: currentRoute,
    onNavChange: handleNavChange,
  };

  if (footerNavBarProps.itemConfigs.length) {
  }

  return (
    <div className="page_footer border-box">
      <NavBar navBarProps={footerNavBarProps} />
    </div>
  );
}
