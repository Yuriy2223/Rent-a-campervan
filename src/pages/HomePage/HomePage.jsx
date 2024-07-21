import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.home}>
        Hello! Welcome to the{"  "}
        <span className={css.company}>Rent a campervan</span> company for the
        sale of campers for your weekend.
      </h1>
    </div>
  );
};

export default HomePage;
