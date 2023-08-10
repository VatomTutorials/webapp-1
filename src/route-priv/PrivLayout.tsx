//import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const PrivLayout = () => {
	const navigate = useNavigate();
	const { accessToken } = useOutletContext();
	const diagConfig = useDiagConfig();

	React.useEffect(() => {
		console.log('PrivLayout mounted');
		if (!accessToken) navigate('/default');
	}, [])

  // console.log('In PrivLayout', diagConfig);

  return (
		<div>
			<DiagStamp stampText='PrivLayout' diagConfig={diagConfig} />
			<Outlet context={{diagConfig}}/>			
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