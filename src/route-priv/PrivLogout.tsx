import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { DiagStamp } from "../components/Diagnostics";

const PrivLogout = () => {
  const { rootContext } = useRootContext_FromOutletContext();

  return (
    <div>
      <DiagStamp stampText="PrivLogout" diagConfig={rootContext.diagConfig} />
      <h1>Logout</h1>
    </div>
  );
};
//
export default PrivLogout;
