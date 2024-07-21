import { useState } from "react";
import Icons from "../Icons/Icons";
import css from "./SearchFormType.module.css";

const SearchFormType = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (type) => {
    setSelected((prevSelected) => (prevSelected === type ? null : type));
  };
  return (
    <div className={css.type}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        <li>
          <button
            className={`${css.btn} ${selected === "van" ? css.selected : ""}`}
            onClick={() => handleClick("van")}
          >
            <Icons
              width={40}
              height={28}
              iconName="camper3"
              className={css.icon}
            />
            Van
          </button>
        </li>
        <li>
          <button
            className={`${css.btn} ${css.btn2} ${
              selected === "fully-integrated" ? css.selected : ""
            }`}
            onClick={() => handleClick("fully-integrated")}
          >
            <Icons
              width={40}
              height={28}
              iconName="camper2"
              className={css.icon}
            />
            Fully Integrated
          </button>
        </li>
        <li>
          <button
            className={`${css.btn} ${
              selected === "alcove" ? css.selected : ""
            }`}
            onClick={() => handleClick("alcove")}
          >
            <Icons
              width={40}
              height={28}
              iconName="camper"
              className={css.icon}
            />
            Alcove
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SearchFormType;
