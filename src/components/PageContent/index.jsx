import { BookLink } from "../BookLink";
import { Location } from "../Location";
import { Route } from "../Route";
import { Tools } from "../Tools";
import s from "./PageContent.module.scss";

const PageContent = () => {
	return <div className={s.PageContent}>
		<Location />
		<Route />
		<Tools />
		<BookLink />
	</div>;
};

export { PageContent };