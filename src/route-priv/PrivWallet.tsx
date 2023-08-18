import { useRootContext_FromOutletContext } from "../route-core/RootLayout";
import { DiagStamp } from "../components/Diagnostics";
import "../Common.css";

const PrivWallet = () => {
  const { rootContext } = useRootContext_FromOutletContext();

  // console.log('In PrivWallet', diagConfig);

  return (
    <div>
      <DiagStamp stampText="PrivWallet" diagConfig={rootContext.diagConfig} />
      <h1>Wallet page</h1>
    </div>
  );
};
//
export default PrivWallet;
