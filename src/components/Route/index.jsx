import s from "./Route.module.scss";

const Route = () => {
  return (
    <div className={s.Route}>
      <img src="./travel/icon/mountain.png" alt="photo Mount" />
      <img src="/travel/icon/mountain.png" alt="photo Mount" />
      <img src={`${import.meta.env.BASE_URL}icon/mountain.png`} alt="photo Mount" />
      <img src="/icon/mountain.png" alt="photo Mount" />
    </div>
  );
};

export { Route };
