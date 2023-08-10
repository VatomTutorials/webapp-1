import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';
import '../Common.css';


const PrivHome = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  // console.log('In PrivHome', diagConfig);

  return (
		<div>
			<DiagStamp stampText='PrivHome' diagConfig={rootContext.diagConfig} />
			<h1>Home page</h1>
		</div>
  );
}
//
export default PrivHome;
