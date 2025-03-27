import { useEffect, useRef } from "react";
import { useGsapPageAnimation } from "../../hooks/useGsapPageAnimation.jsx";
import s from "./MainLayout.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";

const MainLayout = () => {
	const mainRef = useRef(null);
	const { pathname } = useLocation();
	useGsapPageAnimation(mainRef, pathname)
	return (
		<main className={s.MainLayout} ref={mainRef}>
			<Outlet />
		</main>
	);
};


export { MainLayout };