import { useNavigate } from "react-router-dom";
import React from "react";
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const GuestDefault = () => {
  const navigate = useNavigate();
	const diagConfig = useDiagConfig();

  React.useEffect(() => {
  	console.log('GuestDefault mounted');
  	navigate('/guest/about');
  }, [])

  return (
		<div>
			<DiagStamp stampText='GuestDefault' diagConfig={diagConfig} />
			{ /*console.log('Render GuestDefault')*/ }
			<h1>GuestDefault</h1>
		</div>
  );
}
//
export default GuestDefault;
