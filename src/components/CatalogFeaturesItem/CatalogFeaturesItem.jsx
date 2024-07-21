import Icons from "../Icons/Icons";
import css from "./CatalogFeaturesItem.module.css";

const CatalogFeaturesItem = ({ label, value, iconName }) => {
  return (
    <div className={css.featuresComponent}>
      <Icons
        width={20}
        height={20}
        iconName={iconName}
        className={css.svgComponent}
      />
      {value} {label}
    </div>
  );
};

export default CatalogFeaturesItem;

