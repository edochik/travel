import { useRef } from "react";
import { BookLink } from "../../components/BookLink/index.jsx";
import { Location } from "../../components/Location/index.jsx";
import { Route } from "../../components/Route/index.jsx";
import { Tools } from "../../components/Tools/index.jsx";
import s from "./PageContent.module.scss";
import { useGsapPageTransition } from "../../hooks/useGsapPageTransition.jsx";
import { Authorization } from "../../components/Authorization/index.jsx";

const PageContent = () => {
	const pageRef = useRef(null);
	//анимация
	useGsapPageTransition(pageRef)
	
	return <div className={s.PageContent} ref={pageRef} >
		<Authorization />
		<Location />
		<Route />
		<Tools />
		<BookLink />
	</div>;
};

export { PageContent };