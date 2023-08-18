import { NavItemProps } from "./NavTypes";
import Button from "react-bootstrap/Button";
import "../Common.css";

interface PropsContainer {
  navItemProps: NavItemProps;
}

export function NavItem({ navItemProps }: PropsContainer) {
  const buttonClass: string = navItemProps.enabled
    ? "navbar_button_enabled"
    : "navbar_button_disabled";

  return (
    <>
      <Button
        key={navItemProps.config.route}
        className={buttonClass}
        disabled={!navItemProps.enabled}
        onClick={() => {
          if (navItemProps.enabled) {
            navItemProps.onNavChange(navItemProps.config.route);
          }
        }}
      >
        {navItemProps.config.label}
      </Button>
    </>
  );
}
