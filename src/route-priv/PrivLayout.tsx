import { Outlet, useNavigate } from 'react-router-dom';
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { PrivFooter } from './PrivFooter';
import { DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const PrivLayout = () => {
	const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();

	React.useEffect(() => {
		console.log('PrivLayout mounted');
		if (! rootContext.isUserLoggedIn) navigate('/default');
	}, [])

  // console.log('In PrivLayout', diagConfig);

  return (
		<>
			<DiagStamp stampText='PrivLayout' diagConfig={rootContext.diagConfig} />
			<div className="torso_flexitem torso_scroll_container">
				<div className="content_section">
					<Outlet context={{rootContext}} />
				</div>
			</div>
			<PrivFooter />
		</>
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