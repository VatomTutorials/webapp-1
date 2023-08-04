import { useNavigate } from 'react-router-dom';
import React from "react";


const SplashScreenLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
  	setTimeout(() => navigate('/default'), 4000);
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
