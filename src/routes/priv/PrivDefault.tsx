import { useNavigate } from 'react-router-dom';
import React from "react";


const PrivDefault = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
  	console.log('PrivDefault mounted');
  	navigate('/priv/home');
  }, [])

  return (
		<div />
  );
}
//
export default PrivDefault;
