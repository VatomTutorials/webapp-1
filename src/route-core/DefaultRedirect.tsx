import { useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";


const DefaultRedirect = () => {
	const { accessToken } = useOutletContext();
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('DefaultRedirect mounted');
		const nextRoute = (!accessToken) ? '/guest' : '/priv';
  	navigate(nextRoute);
  }, [])
  
  return (
		<div>
	  	{ console.log('Render DefaultRedirect') }
			<h1>DefaultRedirect</h1>
		</div>
  );
}
//
export default DefaultRedirect;
