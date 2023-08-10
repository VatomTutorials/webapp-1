import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const GuestHome = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  return (
		<div>
			<DiagStamp stampText='ThisComponentName' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render GuestHome')*/ }
			<h1>Home page</h1>
		</div>
  );
}
//
export default GuestHome;
