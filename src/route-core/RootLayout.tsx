import { Outlet, useOutletContext } from "react-router-dom";
import React from "react";
import { VatomIdentitySDK } from "@vatom/identity-sdk";
import { DiagConfig, DiagStamp } from "../components/Diagnostics";
import "../Common.css";

export interface RootContext {
  isUserLoggedIn: boolean;
  identitySdk: VatomIdentitySDK;
  diagConfig: DiagConfig;
}

export function useRootContext_FromOutletContext() {
  return useOutletContext<{ rootContext: RootContext }>();
}

export function RootLayout() {
  const clientId = "dce3993b6a24c278";
  const sdkConfig = {};
  const identitySdk = new VatomIdentitySDK(clientId, sdkConfig);
  const [accessToken, setAccessToken] = React.useState(
    identitySdk.getAccessToken()
  );
  const [rootContext] = React.useState<RootContext>({
    //
    isUserLoggedIn: !!accessToken,
    identitySdk: identitySdk,
    diagConfig: {
      showLayoutNames: true,
      logOnRender: true,
    },
  }); // Not using setRootContext
  //const copyRootContext: RootContext = rootContext;

  React.useEffect(() => {
    const triggerCallback = async () => {
      // Put this inside your callback components
      const res = await identitySdk.onCallbacks();
      if (res) {
        setAccessToken(identitySdk.getAccessToken());
      }
    };
    triggerCallback();
  }, []);

  //console.log('In RootLayout');

  return (
    <div className="page_frame">
      <DiagStamp stampText="RootLayout" diagConfig={rootContext.diagConfig} />
      <Outlet context={{ rootContext }} />
    </div>
  );
} // RootLayout()
