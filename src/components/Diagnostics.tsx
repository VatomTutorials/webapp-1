import '../Common.css';


export interface DiagConfig {
  showLayoutNames:		boolean;
  logOnRender:				boolean;
}


export interface DiagStampProps {
  stampText:					string;
  diagConfig:					DiagConfig;
}


export function DiagStamp(props: { stampText: string, diagConfig: DiagConfig } ) {
	let stampElement: JSX.Element;
	
  //console.log('In DiagStamp with props', props);
	
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
 *** *** *** ***


import { DiagStamp } from '../components/Diagnostics';

	const { rootContext } = useRootContext_FromOutletContext();

	return (
		<div>
			<DiagStamp stampText='PrivDefault' diagConfig={rootContext.diagConfig} />
			<Outlet context={{rootContext}} />
		</div>
	);


 *** *** *** ***/