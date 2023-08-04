import { useNavigate } from 'react-router-dom';
import React from "react";


const PrivDefault = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('PrivDefault mounted');
  	navigate('/priv/home');
  }, [])

  return (
		<div>
			{ console.log('Render PrivDefault') }
			<h1>PrivDefault</h1>
		</div>
  );
}
//
export default PrivDefault;
