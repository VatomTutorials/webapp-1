import { Outlet, useNavigate } from 'react-router-dom';
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { GuestFooter } from './GuestFooter';
import { DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const GuestLayout = () => {
	const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();

	React.useEffect(() => {
		console.log('GuestLayout mounted');
		if (rootContext.isUserLoggedIn) navigate('/default');
	}, [])

  // console.log('In GuestLayout');

  return (
		<div className="torso_flexitem torso_scroll_container">
			<DiagStamp stampText='GuestLayout' diagConfig={rootContext.diagConfig} />
			<Outlet context={{rootContext}}/>			
			<GuestFooter />
		</div>
  );
}
//
export default GuestLayout;
