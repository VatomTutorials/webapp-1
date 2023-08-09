import '../Common.css';


export interface DiagConfig {
  showLayoutNames:		boolean;
  logOnRender:				boolean;
}


export function DiagStamp(props) {
	//const { diagConfig, stampText } = useOutletContext();
	let stampElement: JSX.Element = (!! props.diagConfig.showLayoutNames)
		? <div className='diagnostic_text' >{props.stampText}</div> : <div/>;

  // console.log('In DiagStamp', props);

  return (
		<div>
			{ (!! props.diagConfig.logOnRender) ? console.log(`Render ${props.stampText}`) : <div/> }
			{ stampElement }
		</div>
  );
}


/*** *** *** ***
// Usage:

import { DiagConfig, DiagStamp } from '../components/Diagnostics';
import { Outlet, useOutletContext } from 'react-router-dom';


	const { diagConfig } = useOutletContext();

	return (
		<div>
			<DiagStamp stampText='ThisComponentName' diagConfig={diagConfig} />
			<Outlet context={{diagConfig}}/>			
		</div>
	);

 *** *** *** ***/