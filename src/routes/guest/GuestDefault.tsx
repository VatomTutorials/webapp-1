import { useNavigate } from 'react-router-dom';
import React from "react";


const GuestDefault = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('GuestDefault mounted');
  	navigate('/guest/about');
  }, [])

  return (
		<div>
			{ console.log('Render GuestDefault') }
			<h1>GuestDefault</h1>
		</div>
  );
}
//
export default GuestDefault;
