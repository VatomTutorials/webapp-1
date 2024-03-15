import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { DiagStamp } from "../components/Diagnostics";
import Button from "react-bootstrap/Button";
import "../Common.css";

const GuestLogin = () => {
  const { rootContext } = useRootContext_FromOutletContext();

  return (
    <div>
      <DiagStamp stampText="GuestLogin" diagConfig={rootContext.diagConfig} />
      <h1>Login</h1>
      <Button
        key="btn01"
        className="plain_button_enabled"
        onClick={() => {
          console.log("Click for login");
          rootContext.identitySdk.login();
        }}
      >
        log in now
      </Button>
    </div>
  );
};
//
export default GuestLogin;
