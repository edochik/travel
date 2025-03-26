import s from "./BookLink.module.scss";

const BookLink = () => {
  return (
    <a className={s.BookLink} href="#!">
      <div className={s.img}>
        <img src="./icon/volcano.png" alt="" />
      </div>
      <p className={s.text}>I`M IN &bull; BOOK</p>
      <img
        className={s.arrowRight}
        src="./icon/arrow-right.svg"
        alt="arrow right"
      />
    </a>
  );
};

export { BookLink };
