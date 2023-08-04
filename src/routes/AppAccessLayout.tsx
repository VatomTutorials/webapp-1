import { Outlet, useOutletContext } from 'react-router-dom';
import React from "react";
import { VatomIdentitySDK } from "@vatom/identity-sdk"


function AppAccessLayout() {
	const { identitySdk } = useOutletContext();
  const [accessToken, setAccessToken] = React.useState(identitySdk.getAccessToken())
  
  console.log('In AppAccessLayout');

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
		<>
			<Outlet context={{identitySdk, accessToken}} />
		</>
	);
}

export default AppAccessLayout;
