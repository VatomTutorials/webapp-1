import { useOutletContext, useNavigate } from 'react-router-dom';
import React from "react";
// import { Outlet, useOutletContext } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import appLogo from '../assets/app-logo.png';
// import '../Common.css';


const SplashScreenLayout = () => {
	const { accessToken } = useOutletContext();
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('SplashScreenLayout mounted');
		const nextRoute = (!accessToken) ? '/guest' : '/priv';
  	setTimeout(() => navigate(nextRoute), 4000);
  }, [])
  
  return (
		<div>
	  	{ console.log('Render SplashScreenLayout') }
			<h1>SplashScreenLayout</h1>
		</div>
  );
}
//
export default SplashScreenLayout;



	/***
	return (
		<div>
			{!accessToken ? (
				<h1> Hello pub World! </h1>
			) : (
				<h1> Hello priv World! </h1>
			)}
		</div>
	);
	***/
