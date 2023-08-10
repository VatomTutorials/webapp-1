//import { useOutletContext } from 'react-router-dom';
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const PrivHome = () => {
	//const { diagConfig } = useOutletContext();
	const diagConfig = useDiagConfig();

  // console.log('In PrivHome', diagConfig);

  return (
		<div>
			<DiagStamp stampText='PrivHome' diagConfig={diagConfig} />
			<h1>Home page</h1>
		</div>
  );
}
//
export default PrivHome;
