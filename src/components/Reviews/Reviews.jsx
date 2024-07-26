import BookCampervan from "../BookCampervan/BookCampervan";
import UserFeedback from "../UserFeedback/UserFeedback";
import css from "./Reviews.module.css";

const Reviews = ({ camper }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapper1}>
        <UserFeedback camper={camper} />
      </div>
      <div className={css.wrapper2}>
        <BookCampervan camper={camper} />
      </div>
    </div>
  );
};

export default Reviews;
