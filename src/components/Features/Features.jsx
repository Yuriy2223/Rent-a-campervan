import BookCampervan from "../BookCampervan/BookCampervan";
import CompleteSet from "../CompleteSet/CompleteSet";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={css.featuresWrapper}>
      <div className={css.wrapper}>
        <CompleteSet camper={camper} />
        <VehicleDetails camper={camper} />
      </div>
      <div className={css.wrapper2}>
        <BookCampervan camper={camper} />
      </div>
    </div>
  );
};

export default Features;
