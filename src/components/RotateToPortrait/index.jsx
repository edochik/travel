import s from "./RotateToPortrait.module.scss";

const RotateToPortrait = () => {
  return <div className={s.RotateToPortrait}>
    <div className={s.phone}>
      <img src="/travel/icon/phone.svg" alt="photo phone" />
    </div>
  </div>;
};

export { RotateToPortrait };
