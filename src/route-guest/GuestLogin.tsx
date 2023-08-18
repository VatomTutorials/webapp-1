import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { DiagStamp } from "../components/Diagnostics";

const GuestLogin = () => {
  const { rootContext } = useRootContext_FromOutletContext();

  return (
    <div>
      <DiagStamp stampText="GuestLogin" diagConfig={rootContext.diagConfig} />
      <h1>Login</h1>
    </div>
  );
};
//
export default GuestLogin;
