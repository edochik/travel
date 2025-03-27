import { QrCode } from "../../assets/image/svg/QrCode.jsx";
import s from "./DeviceChecker.module.scss";

const DeviceChecker = () => {
	return <div className={s.DeviceChecker}>
		<div className={s.qrCode}>
			<QrCode />
		</div>
		<p className={s.text}>
			Переходи в <a href="https://t.me/username" className={s.link}>Telegram</a>
		</p>
	</div>;
};

export { DeviceChecker };