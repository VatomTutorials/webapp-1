import { useNavigate } from 'react-router-dom';
import React from "react";


const GuestDefault = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('GuestDefault mounted');
  	navigate('/guest/about');
  }, [])

  return (
		<div />
  );
}
//
export default GuestDefault;
