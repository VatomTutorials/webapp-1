//import { useOutletContext } from 'react-router-dom';
import '../Common.css';


export interface DiagConfig {
  showLayoutNames:		boolean;
  logOnRender:				boolean;
}


export interface DiagStampProps {
  stampText:					string;
  diagConfig:					DiagConfig;
}


/*** *** *** ***
export function useDiagConfig() {
  return useOutletContext<DiagConfig>();
}
 *** *** *** ***/
 

export function DiagStamp(props: { stampText: string, diagConfig: DiagConfig } ) {
	//const { diagConfig, stampText } = useOutletContext();
	
	let stampElement: JSX.Element;
	
  console.log('In DiagStamp with props', props);

	
	if (props.diagConfig.showLayoutNames){
		stampElement = <div className='diagnostic_text' >{props.stampText}</div>;
	}else{
		stampElement = <div/>;
	}


  return (
		<div>
			<>{ (!! props.diagConfig.logOnRender) ? console.log(`Render ${props.stampText}`) : <div/> }</>
			{ stampElement }
		</div>
  );
}


/*** *** *** ***
// Usage:

import { Outlet, useOutletContext } from 'react-router-dom';
import { useDiagConfig, DiagStamp } from '../components/Diagnostics';

	const { accessToken } = useOutletContext();
	const diagConfig = useDiagConfig();


 *** *** *** ***


import { useDiagConfig, DiagStamp } from '../components/Diagnostics';

	const diagConfig = useDiagConfig();

	return (
		<div>
			<DiagStamp stampText='ThisComponentName' diagConfig={diagConfig} />
			<Outlet context={{diagConfig}}/>			
		</div>
	);

 *** *** *** ***/