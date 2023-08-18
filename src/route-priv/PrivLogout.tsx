import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { DiagStamp } from "../components/Diagnostics";
import Button from "react-bootstrap/Button";
import "../Common.css";

const PrivLogout = () => {
  const { rootContext } = useRootContext_FromOutletContext();

  return (
    <div>
      <DiagStamp stampText="PrivLogout" diagConfig={rootContext.diagConfig} />
      <h1>Logout</h1>
      <Button
        key="btn01"
        className="plain_button_enabled"
        onClick={() => {
          console.log("Click for logout");
          rootContext.identitySdk.logout();
        }}
      >
        log out now
      </Button>
    </div>
  );
};
//
export default PrivLogout;
