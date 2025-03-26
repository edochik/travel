import { useState } from "react";
import s from "./Tools.module.scss";
import classNames from "classnames";
import { KnifeIcon } from "../../assets/image/svg/KnifeIcon.jsx";
import { PickIcon } from "../../assets/image/svg/PickIcon.jsx";
import { CompassIcon } from "../../assets/image/svg/CompassIcon.jsx";
import { FlashlightIcon } from "../../assets/image/svg/FlashlightIcon.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

const tools = [
  { id: 1, text: "Knife", icon: <KnifeIcon /> },
  { id: 2, text: "Pick", icon: <PickIcon /> },
  { id: 3, text: "Compass", icon: <CompassIcon /> },
  { id: 4, text: "Flashlight", icon: <FlashlightIcon /> },
];

const Tools = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={s.Tools}>
      <h3 className={s.title}>
        <span>Tools</span> You Need
      </h3>
      <nav className={s.nav}>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
          className={s.customSwiper}
        >
          {[...tools, ...tools].map(({ id, text, icon }, index) => (
            <SwiperSlide key={id} style={{ width: "unset" }}>
              <div
                className={classNames({
                  [s.item]: true,
                  [s.active]: active === index,
                })}
                onClick={() => setActive(index)}
              >
                <div className={s.image}>{icon}</div>
                {active === index && <span className={s.text}>{text}</span>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </div>
  );
};

export { Tools };