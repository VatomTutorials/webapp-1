import { useNavigate } from 'react-router-dom';
import React from "react";
import { RootContext, useRootContext_FromOutletContext }	from './RootLayout';
import { DiagConfig, DiagStamp } from '../components/Diagnostics';


const SplashScreenLayout = () => {
  const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();
	//const diagConfig:DiagConfig = rootContext.diagConfig;
	//const diagConfig = useDiagConfig();
	
  console.log('In SplashScreenLayout with rootContext, diagConfig', rootContext);
	
  React.useEffect(() => {
  	setTimeout(() => navigate('/default'), 4000);
  }, [])
  
  return (
		<div>
			<DiagStamp stampText='SplashScreenLayout' diagConfig={rootContext.diagConfig} />
			{ /* console.log('Render SplashScreenLayout')*/ }
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
