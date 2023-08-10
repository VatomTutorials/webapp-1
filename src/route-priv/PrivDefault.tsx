import { useNavigate } from 'react-router-dom';
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const PrivDefault = () => {
  const navigate = useNavigate();
	const rootContext = useRootContext_FromOutletContext();

  React.useEffect(() => {
  	console.log('PrivDefault mounted');
  	navigate('/priv/home');
  }, [])

  return (
		<div>
			<DiagStamp stampText='PrivDefault' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render PrivDefault')*/ }
			<h1>PrivDefault</h1>
		</div>
  );
}
//
export default PrivDefault;
