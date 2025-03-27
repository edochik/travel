import { Routes, useLocation } from "react-router";
import { Route, useNavigate } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../components/PageContent/";
import { DeviceChecker } from "../components/DeviceChecker/";
import { RotateToPortrait } from "../components/RotateToPortrait/";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { useOrientation } from "../hooks/useOrientation.jsx";

const RouterConfig = () => {
	const isPortrait = useOrientation();
	const isMobile = useIsMobile();
	const navigate = useNavigate();
	// const { pathname } = useLocation();
	// console.log(pathname, 'pathname');
	const [initialState, setInitialState] = useState({
		isLoading: true,
		isPortrait,
		isMobile
	});

	useEffect(() => {
		const timer = setTimeout(() => setInitialState(prev => ({ ...prev, isLoading: false })), 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		setInitialState(prev => ({
			...prev,
			isPortrait: isPortrait,
			isMobile: isMobile,
		}));
	}, [isPortrait, isMobile]);


	// в функцию обернуть для перехода между страницами в отдельную функцию
	useEffect(() => {
		if (!initialState.isMobile) {
			navigate("/device-check");
		} else if (initialState.isLoading) {
			navigate("/loading");
		} else if (!initialState.isPortrait) {
			navigate("/rotate");
		} else {
			navigate('/travel');
		}
	}, [initialState, navigate]);

	return <Routes>
		<Route path="/loading" element={<LoadingScreen isLoading={initialState.isLoading} />} />
		<Route path="/travel" element={<PageContent />} />
		<Route path="/fake" element={<PageContent />} />
		<Route path="/device-check" element={<DeviceChecker />} />
		<Route path="/rotate" element={<RotateToPortrait />} />
	</Routes>
};

export { RouterConfig };