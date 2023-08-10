import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const GuestLayout = () => {
	const navigate = useNavigate();
	const { accessToken } = useOutletContext();
	const diagConfig = useDiagConfig();

	React.useEffect(() => {
		console.log('GuestLayout mounted');
		if (!! accessToken) navigate('/default');
	}, [])

  // console.log('In GuestLayout');

  return (
		<div>
			<DiagStamp stampText='ThisComponentName' diagConfig={diagConfig} />
			{ /*console.log('Render GuestLayout')*/ }
			<h1>GuestLayout</h1>
			<Outlet />			
		</div>
  );
}
//
export default GuestLayout;
