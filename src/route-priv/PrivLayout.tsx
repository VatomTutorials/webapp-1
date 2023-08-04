import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";
import '../Common.css';


const PrivLayout = () => {
	const { accessToken } = useOutletContext();
	const navigate = useNavigate();

	React.useEffect(() => {
		console.log('PrivLayout mounted');
		if (!accessToken) navigate('/default');
	}, [])

  // console.log('In PrivLayout');

  return (
		<div>
			{ console.log('Render PrivLayout') }
			<div className='diagnostic_text' >PrivLayout</div>
			<Outlet />			
		</div>
  );
}
//
export default PrivLayout;
