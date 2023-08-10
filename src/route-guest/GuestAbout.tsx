import { useDiagConfig, DiagStamp } from '../components/Diagnostics';


const GuestAbout = () => {
	const diagConfig = useDiagConfig();

  return (
		<div>
			<DiagStamp stampText='GuestAbout' diagConfig={diagConfig} />
			{ /*console.log('Render GuestAbout')*/ }
			<h1>About page</h1>
			<h3>v 0.0.003</h3>
		</div>
  );
}
//
export default GuestAbout;
