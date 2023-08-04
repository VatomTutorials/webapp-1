import { Outlet, useOutletContext } from 'react-router-dom';
import { DiagConfig } from '../components/diagTypes';
import { DiagStamp } from '../components/DiagStamp';
import '../Common.css';


const PrivHome = () => {
	const { diagConfig } = useOutletContext();

  console.log('In PrivHome', diagConfig);

  return (
		<div>
			<DiagStamp stampText='PrivHome' diagConfig={diagConfig} />
			<h1>Home page</h1>
		</div>
  );
}
//
export default PrivHome;


// 			{ showLayoutNames ? <div className='diagnostic_text' >PrivHome</div>:<div/>}
