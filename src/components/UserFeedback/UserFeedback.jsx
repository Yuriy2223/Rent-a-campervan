import Icons from "../Icons/Icons";
import css from "./UserFeedback.module.css";

const UserFeedback = ({ camper: { reviews } }) => {
  return (
    <ul className={css.listContent}>
      {reviews.map((response, index) => {
        const firstLetter = response.reviewer_name.charAt(0).toUpperCase();
        const rating = response.reviewer_rating;
        return (
          <li className={css.contentItem} key={index}>
            <div className={css.header}>
              <div className={css.letter}>{firstLetter}</div>
              <div className={css.box}>
                <p className={css.name}>{response.reviewer_name}</p>
                <ul className={css.ratingList}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li className={css.ratingItem} key={i}>
                      <Icons
                        width={16}
                        height={16}
                        iconName="starStart"
                        className={i < rating ? css.starActive : css.starStart}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.text}>{response.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default UserFeedback;
