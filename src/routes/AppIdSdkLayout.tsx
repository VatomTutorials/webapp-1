import { RouterProvider } from 'react-router-dom';
// import React from "react";
import { VatomIdentitySDK } from "@vatom/identity-sdk"


function AppIdSdkLayout() {
  const clientId = "dce3993b6a24c278"
  const sdkConfig = {}
  const identitySdk = new VatomIdentitySDK(clientId, sdkConfig)
  
  console.log('In AppIdSdkLayout');

	return (
		<>
			<Outlet context={{identitySdk}} />
		</>
	);
}

export default AppIdSdkLayout;
