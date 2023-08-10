import { useRootContext_FromOutletContext }	from '../route-core/RootLayout';
import { DiagStamp } from '../components/Diagnostics';


const PrivError404 = () => {
	const { rootContext } = useRootContext_FromOutletContext();

  return (
		<div>
			<DiagStamp stampText='PrivError404' diagConfig={rootContext.diagConfig} />
			{ /*console.log('Render PrivError404')*/ }
			<h1>Page not found</h1>
			<h3>Please try again</h3>
			<h3>Error 404</h3>
		</div>
  );
}
//
export default PrivError404;
