import s from "./Location.module.scss";

const Location = () => {
  return (
    <div className={s.Location}>
      <h1 className={s.title}>Mount Kita</h1>
      <p className={s.text}>mountain</p>
      <p className={s.place}>Japan &bull; 3,193 m</p>
    </div>
  );
};

export { Location };
