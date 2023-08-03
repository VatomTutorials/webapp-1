import { createBrowserRouter	} from 'react-router-dom';
import SplashScreenLayout		from './SplashScreenLayout';
import GuestLayout					from './guest/GuestLayout';
import PrivLayout						from './priv/PrivLayout';


export const appRouter = createBrowserRouter([
	{ path: "/",			element: <SplashScreenLayout />},
	{ path: "/guest",	element: <GuestLayout />},
	{ path: "/priv",	element: <PrivLayout />}
]);
