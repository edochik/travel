import { BookLink } from "../../components/BookLink/index.jsx";
import { Location } from "../../components/Location/index.jsx";
import { Route } from "../../components/Route/index.jsx";
import { Tools } from "../../components/Tools/index.jsx";
import s from "./PageContent.module.scss";

const PageContent = () => {
	return <div className={s.PageContent}	>
		<Location />
		<Route />
		<Tools />
		<BookLink />
	</div>;
};

export { PageContent };