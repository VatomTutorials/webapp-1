import { useOutletContext, useNavigate } from 'react-router-dom';
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';
import React from "react";


const DefaultRedirect = () => {
  const navigate = useNavigate();
	const { accessToken } = useOutletContext();
	const diagConfig = useDiagConfig();

  React.useEffect(() => {
  	console.log('DefaultRedirect mounted');
		const nextRoute = (!accessToken) ? '/guest' : '/priv';
  	navigate(nextRoute);
  }, [])
  
  return (
		<div>
			<DiagStamp stampText='DefaultRedirect' diagConfig={diagConfig} />
	  	{ /*console.log('Render DefaultRedirect')*/ }
			<h1>DefaultRedirect</h1>
		</div>
  );
}
//
export default DefaultRedirect;
