import { useRef } from "react";
import { BookLink } from "../../components/BookLink/index.jsx";
import { Location } from "../../components/Location/index.jsx";
import { Route } from "../../components/Route/index.jsx";
import { Tools } from "../../components/Tools/index.jsx";
import s from "./PageContent.module.scss";
import { Authorization } from "../../components/Authorization/index.jsx";

const PageContent = () => {
	return <div className={s.PageContent}	>
		<Authorization />
		<Location />
		<Route />
		<Tools />
		<BookLink />
	</div>;
};

export { PageContent };