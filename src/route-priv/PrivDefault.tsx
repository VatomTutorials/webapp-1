import { useNavigate } from 'react-router-dom';
import React from "react";
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const PrivDefault = () => {
  const navigate = useNavigate();
	const diagConfig = useDiagConfig();

  React.useEffect(() => {
  	console.log('PrivDefault mounted');
  	navigate('/priv/home');
  }, [])

  return (
		<div>
			<DiagStamp stampText='PrivDefault' diagConfig={diagConfig} />
			{ /*console.log('Render PrivDefault')*/ }
			<h1>PrivDefault</h1>
		</div>
  );
}
//
export default PrivDefault;
