import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const GuestHome = () => {
	const diagConfig = useDiagConfig();

  return (
		<div>
			<DiagStamp stampText='ThisComponentName' diagConfig={diagConfig} />
			{ /*console.log('Render GuestHome')*/ }
			<h1>Home page</h1>
		</div>
  );
}
//
export default GuestHome;
