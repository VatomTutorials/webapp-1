import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";


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
			<h1>PrivLayout</h1>
			<Outlet />			
		</div>
  );
}
//
export default PrivLayout;
