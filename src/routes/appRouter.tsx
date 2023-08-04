import { createBrowserRouter	} from 'react-router-dom';
import AppIdSdkLayout				from './AppIdSdkLayout';
import AppAccessLayout			from './AppAccessLayout';
import SplashScreenLayout		from './SplashScreenLayout';
import GuestLayout					from './guest/GuestLayout';
import GuestDefault					from './guest/GuestDefault';
import GuestAbout						from './guest/GuestAbout';
import GuestError404				from './guest/GuestError404';
import GuestHome						from './guest/GuestHome';
import PrivLayout						from './priv/PrivLayout';
import PrivDefault					from './priv/PrivDefault';
import PrivAbout						from './priv/PrivAbout';
import PrivError404					from './priv/PrivError404';
import PrivHome							from './priv/PrivHome';


export const appRouter = createBrowserRouter([{
	element: <AppIdSdkLayout />,
	children: [{
		element: <AppAccessLayout />,
		children: [
			{ path: "/",			element: <SplashScreenLayout /> },
			{ 
				path: "/guest",
				element: <GuestLayout />,
				children: [
					{ index: true,		element: <GuestDefault />} ,
					{ path: "about",	element: <GuestAbout />} ,
					{ path: "home",		element: <GuestHome />} ,
					{ path: "*",			element: <GuestError404 />} 
				]
			},
			{ 
				path: "/priv",
				element: <PrivLayout />,
				children: [
					{ index: true,		element: <PrivDefault />} ,
					{ path: "about",	element: <PrivAbout />} ,
					{ path: "home",		element: <PrivHome />} ,
					{ path: "*",			element: <PrivError404 />} 
				]
			}
		]
	}]
}]);
