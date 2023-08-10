import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const GuestError404 = () => {
	const diagConfig = useDiagConfig();

  return (
		<div>
			<DiagStamp stampText='GuestError404' diagConfig={diagConfig} />
			{ /*console.log('Render GuestError404')*/ }
			<h1>Page not found</h1>
			<h3>Please try again</h3>
			<h3>Error 404</h3>
		</div>
  );
}
//
export default GuestError404;
