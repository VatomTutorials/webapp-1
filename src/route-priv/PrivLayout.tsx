import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";
import { DiagConfig } from '../components/diagTypes';
import { DiagStamp } from '../components/DiagStamp';
import '../Common.css';


const PrivLayout = () => {
	const { diagConfig, accessToken } = useOutletContext();
	const navigate = useNavigate();

	React.useEffect(() => {
		console.log('PrivLayout mounted');
		if (!accessToken) navigate('/default');
	}, [])

  console.log('In PrivLayout', diagConfig);

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