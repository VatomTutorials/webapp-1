import { Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import appLogo from '../assets/app-logo.png';
// import '../Common.css';


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
