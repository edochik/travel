import { Link } from "react-router-dom";
import s from "./FakePage.module.scss";

const FakePage = () => {
	return <div className={s.FakePage}>
		KUKU
		<Link to="/travel" >обратно</Link>
	</div>;
};

export { FakePage };