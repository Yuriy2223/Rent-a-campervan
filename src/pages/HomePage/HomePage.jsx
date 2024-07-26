import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.wrapper}>
      <div className={css.home}>
        Hello! Welcome to the company{" "}
        <span className={css.company}>&quot;Camper rental&quot;</span>. Camper,
        the best choice for your weekend. Forward to the dream.
        <button type="button" className={css.btnHome} onClick={handleClick}>
          Forward to the dream
        </button>
      </div>
    </div>
  );
};

export default HomePage;
