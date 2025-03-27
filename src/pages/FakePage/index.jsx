import { Link } from "react-router-dom";
import { Route } from "../../components/Route/index.jsx";
import s from "./FakePage.module.scss";

const FakePage = () => {
	return <div className={s.FakePage}>
		<p>Гора KUKU</p>
		<Route />
		<p>Путешествие "ТУДЫ СЮДЫ"</p>
		<Link to="/travel" >Верни ТУДЫ</Link>
	</div>;
};

export { FakePage };