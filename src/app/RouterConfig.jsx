import { Navigate, Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import { DeviceChecker } from "../components/DeviceChecker/";
import { RotateToPortrait } from "../components/RotateToPortrait/";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { useOrientation } from "../hooks/useOrientation.jsx";

const RouterConfig = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	const isPortrait = useOrientation();
	const isMobile = useIsMobile();

	return <Router>
		<Routes>
			<Route path="/loading" element={<LoadingScreen isLoading={isLoading} />}></Route>
			<Route path="/" element={isLoading ? <Navigate to="/loading" /> : <PageContent />} />
			<Route path="/fake" element={<PageContent />}></Route>
			<Route path="/device-check" element={<DeviceChecker />}></Route>
			<Route path="/rotate" element={<RotateToPortrait />}></Route>
		</Routes>
	</Router>;
};

export { RouterConfig };