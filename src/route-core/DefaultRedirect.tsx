import { useNavigate } from 'react-router-dom';
import React from "react";
//import { RootContext, useRootContext_FromOutletContext }	from './RootLayout';
import { useRootContext_FromOutletContext }	from './RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const DefaultRedirect = () => {
  const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();
	//const diagConfig = useDiagConfig();

  React.useEffect(() => {
  	console.log('DefaultRedirect mounted');
		const nextRoute = (! rootContext.isUserLoggedIn) ? '/guest/about' : '/priv/home';
  	navigate(nextRoute);
  }, [])
  
  return (
		<div>
			<DiagStamp stampText='DefaultRedirect' diagConfig={rootContext.diagConfig} />
	  	{ /*console.log('Render DefaultRedirect')*/ }
			<h1>DefaultRedirect</h1>
		</div>
  );
}
//
export default DefaultRedirect;
