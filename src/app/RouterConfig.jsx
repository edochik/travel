import { Routes } from "react-router";
import { Route, useNavigate } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/";
import { PageContent } from "../pages/PageContent/index.jsx";
import { DeviceChecker } from "../components/DeviceChecker/";
import { RotateToPortrait } from "../components/RotateToPortrait/";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile.jsx";
import { useOrientation } from "../hooks/useOrientation.jsx";
import { MainLayout } from "../pages/MainLayout/index.jsx";
import { FakePage } from "../pages/FakePage/index.jsx";

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
		const timer = setTimeout(() => setInitialState(prev => ({ ...prev, isLoading: false })), 3000);
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
	// useEffect(() => {
	// 	if (!initialState.isMobile) {
	// 		navigate("/device-check");
	// 	} else if (initialState.isLoading) {
	// 		navigate("/loading");
	// 	} else if (!initialState.isPortrait) {
	// 		navigate("/rotate");
	// 	} else {
	// 		navigate('/');
	// 	}
	// }, [initialState, navigate]);

	if (!initialState.isMobile) {
		return <DeviceChecker />;
	} else if (initialState.isLoading) {
		return <LoadingScreen isLoading={initialState.isLoading} />;
	} else if (!initialState.isPortrait) {
		return <RotateToPortrait />;
	} else {
		return (
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="travel" element={<PageContent />} />
					<Route path="fake" element={<FakePage />} />
				</Route>
				{/* Если нужно, можно оставить отдельные маршруты */}
				{/* <Route path="/device-check" element={<DeviceChecker />} /> */}
				{/* <Route path="/rotate" element={<RotateToPortrait />} /> */}
			</Routes>
		);
	}
}
export { RouterConfig };