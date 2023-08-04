import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";


const GuestLayout = () => {

  console.log('In GuestLayout');

  return (
		<div>
			<h1>GuestLayout</h1>
			<Outlet />			
		</div>
  );
}
//
export default GuestLayout;
