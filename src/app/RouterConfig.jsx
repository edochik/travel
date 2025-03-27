import { Navigate, Routes } from "react-router";
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

	useEffect(() => {
		if (initialState.isLoading) {
			navigate("/load");
		} else if (!initialState.isMobile) {
			navigate("/device-check");
		} else if (!initialState.isPortrait) {
			navigate("/rotate");
		} else {
			navigate('/')
		}
	}, [initialState, navigate]);

	return <Routes>
		<Route path="/load" element={<LoadingScreen isLoading={initialState.isLoading} />}></Route>
		<Route path="/" element={<PageContent />} />
		<Route path="/fake" element={<PageContent />}></Route>
		<Route path="/device-check" element={<DeviceChecker />}></Route>
		<Route path="/rotate" element={<RotateToPortrait />}></Route>
	</Routes>
};

export { RouterConfig };