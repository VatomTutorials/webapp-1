import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";


const GuestLayout = () => {
	const { accessToken } = useOutletContext();
	const navigate = useNavigate();

	React.useEffect(() => {
		console.log('GuestLayout mounted');
		if (!! accessToken) navigate('/default');
	}, [])

  console.log('In GuestLayout');

  return (
		<div>
			{ console.log('Render GuestLayout') }
			<h1>GuestLayout</h1>
			<Outlet />			
		</div>
  );
}
//
export default GuestLayout;
