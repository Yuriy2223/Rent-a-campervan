import { Link } from "react-router-dom";
import css from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={css.errorPage}>
      <div className={css.wrraperContent}>
        <h1 className={css.textError}>Oops, an error occurred!</h1>
        <Link className={css.linkError} to="/">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
