import { MooseIcon } from "../../assets/image/svg/MooseIcon.jsx";
import s from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={s.LoadingScreen}>
      <div className={s.logo}>
        <MooseIcon />
      </div>
      <div className={s.texts}>
        <p>Let’s get</p>
        <p>lost</p>
        <p>with</p>
        <p>Seham</p>
        <p>Kharraz</p>
      </div>
      <div className={s.decor}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export { LoadingScreen };
