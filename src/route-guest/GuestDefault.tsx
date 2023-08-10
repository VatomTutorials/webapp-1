import { useNavigate } from "react-router-dom";
import React from "react";
import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const GuestDefault = () => {
  const navigate = useNavigate();
	const { rootContext } = useRootContext_FromOutletContext();

  React.useEffect(() => {
  	console.log('GuestDefault mounted');
  	navigate('/guest/about');
  }, [])

  return (
		<div>
			<DiagStamp stampText='GuestDefault' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render GuestDefault')*/ }
			<h1>GuestDefault</h1>
		</div>
  );
}
//
export default GuestDefault;
