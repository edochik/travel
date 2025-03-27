import { Route, Router, Routes } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import { DeviceChecker } from "../components/DeviceChecker/";
import { RotateToPortrait } from "../components/RotateToPortrait/";

const RouterConfig = () => {
	
	return <Router>
		<Routes>
			<Route path="/loading" element={<LoadingScreen />}></Route>
			<Route path="/" element={<PageContent />}></Route>
			<Route path="/fake" element={<PageContent />}></Route>
			<Route path="/device-check" element={<DeviceChecker />}></Route>
			<Route path="/rotate" element={<RotateToPortrait />}></Route>
		</Routes>
	</Router>;
};

export { RouterConfig };