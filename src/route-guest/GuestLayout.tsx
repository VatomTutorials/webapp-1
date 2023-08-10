import { Outlet, useNavigate } from 'react-router-dom';
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';
// import '../Common.css';


const GuestLayout = () => {
	const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();

	React.useEffect(() => {
		console.log('GuestLayout mounted');
		if (rootContext.isUserLoggedIn) navigate('/default');
	}, [])

  // console.log('In GuestLayout');

  return (
		<div>
			<DiagStamp stampText='GuestLayout' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render GuestLayout')*/ }
			<Outlet context={{rootContext}}/>			
		</div>
  );
}
//
export default GuestLayout;
