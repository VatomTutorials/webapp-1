import { Outlet, useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";


const PrivLayout = () => {

  console.log('In PrivLayout');

  return (
		<div>
			<h1>PrivLayout</h1>
			<Outlet />			
		</div>
  );
}
//
export default PrivLayout;
