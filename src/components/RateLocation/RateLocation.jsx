import Icons from "../Icons/Icons";
import css from "./RateLocation.module.css";

const CatalogRateLocation = ({ rating, reviews, location }) => {
  const formattedLocation = location.split(", ").reverse().join(", ");

  return (
    <div className={css.rateLocation}>
      <div className={css.rate}>
        <Icons
          width={16}
          height={16}
          iconName="starStart"
          className={css.svgStar}
        />
        {rating} ({reviews.length} Reviews)
      </div>
      <div className={css.location}>
        <Icons width={20} height={20} iconName="map" className={css.svgMap} />
        {formattedLocation}
      </div>
    </div>
  );
};

export default CatalogRateLocation;
