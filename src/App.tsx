import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import React from "react";
//import { VatomIdentitySDK } from "@vatom/identity-sdk"
//import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Error404Page from './pages/Error404';
import './Common.css';


function App() {

/***
  const clientId = "dce3993b6a24c278"
  const sdkConfig = {}
  const identitySdk = new VatomIdentitySDK(clientId, sdkConfig)
  const [accessToken, setAccessToken] = React.useState(identitySdk.getAccessToken())

  useEffect(() => {
    const triggerCallback = async () => {
      // Put this inside your callback components
      const res = await identitySdk.onCallbacks()
      if (res) {
        setAccessToken(identitySdk.getAccessToken())
      }
    }
    triggerCallback()
  }, [])
***/

  return (
    <BrowserRouter basename={"/" }>
    	<div className="page_frame">
				<div className="torso_flexitem torso_scroll_container">
					<div className="content_section">
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/home" element={<HomePage />}></Route>
							<Route path="/about" element={<AboutPage />}></Route>
							<Route path="*" element={<Error404Page />}></Route>
						</Routes>
					</div>
				</div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


// <Header />
// <Footer />
// <p> footer </p>