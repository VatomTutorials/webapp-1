//import { Outlet, useOutletContext } from 'react-router-dom';
import './diagTypes.tsx';
import '../Common.css';


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
