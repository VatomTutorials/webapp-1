import { Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import appLogo from '../assets/app-logo.png';
// import '../Common.css';


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
