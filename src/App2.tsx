import { RouterProvider } from 'react-router-dom';
import React from "react";
import { VatomIdentitySDK } from "@vatom/identity-sdk"
import { appRouter } from './route-core/appRouter';


function App2() {
  const clientId = "dce3993b6a24c278"
  const sdkConfig = {}
  const identitySdk = new VatomIdentitySDK(clientId, sdkConfig)
  const [accessToken, setAccessToken] = React.useState(identitySdk.getAccessToken())
  
  console.log('In App2 with accessToken', accessToken);

  React.useEffect(() => {
    const triggerCallback = async () => {
      // Put this inside your callback components
      const res = await identitySdk.onCallbacks()
      if (res) {
        setAccessToken(identitySdk.getAccessToken())
      }
    }
    triggerCallback()
  }, [])
  
	return (
		<RouterProvider router={appRouter} />
	);
}

export default App2;
