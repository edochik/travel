import { useState } from "react";
import s from "./Tools.module.scss";
import classNames from "classnames";
import { KnifeIcon } from "../../assets/image/svg/KnifeIcon.jsx";
import { PickIcon } from "../../assets/image/svg/PickIcon.jsx";
import { CompassIcon } from "../../assets/image/svg/CompassIcon.jsx";
import { FlashlightIcon } from "../../assets/image/svg/FlashlightIcon.jsx";

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
        <ul className={s.list}>
          {[...tools, ...tools].map(({ id, text, icon }, index) => (
            <li
              className={classNames({
                [s.item]: true,
                [s.active]: active === index,
              })}
              key={id}
              onClick={() => setActive(index)}
            >
              <div className={s.image}>{icon}</div>
              {active === index && <span className={s.text}>{text}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { Tools };
