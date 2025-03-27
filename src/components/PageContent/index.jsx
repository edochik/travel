import { useRef } from "react";
import { BookLink } from "../BookLink";
import { Location } from "../Location";
import { Route } from "../Route";
import { Tools } from "../Tools";
import s from "./PageContent.module.scss";
import { useGsapPageTransition } from "../../hooks/useGsapPageTransition.jsx";
import { Authorization } from "../Authorization/index.jsx";

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