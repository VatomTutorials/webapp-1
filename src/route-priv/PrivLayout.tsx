import { Outlet, useNavigate } from 'react-router-dom';
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';
// import '../Common.css';


const PrivLayout = () => {
	const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();

	React.useEffect(() => {
		console.log('PrivLayout mounted');
		if (! rootContext.isUserLoggedIn) navigate('/default');
	}, [])

  // console.log('In PrivLayout', diagConfig);

  return (
		<div>
			<DiagStamp stampText='PrivLayout' diagConfig={rootContext.diagConfig} />
			<Outlet context={{rootContext}}/>			
		</div>
  );
}
//
export default PrivLayout;


/***
		<div>
			{ console.log('Render PrivLayout') }
			{ showLayoutNames ? <div className='diagnostic_text' >PrivLayout</div>:<div/>}
			<Outlet />			
		</div>
 ***/