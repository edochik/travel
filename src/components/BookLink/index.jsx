import s from "./BookLink.module.scss";

const BookLink = () => {
  return (
    <a className={s.BookLink} href="#!">
      <div className={s.img}>
        <img src="../../../public/icon/volcano.PNG" alt="" />
      </div>
      <p className={s.text}>I`M IN &bull; BOOK</p>
      <img
        className={s.arrowRight}
        src="../../../public/icon/arrow-right.svg"
        alt="arrow right"
      />
    </a>
  );
};

export { BookLink };
