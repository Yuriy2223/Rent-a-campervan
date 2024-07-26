import Icons from "../Icons/Icons";
import css from "./CatalogItemFeatures.module.css";

const CatalogFeaturesItem = ({ name, value, iconName }) => {
  return (
    <div className={css.featuresComponent}>
      <Icons
        width={20}
        height={20}
        iconName={iconName}
        className={css.svgComponent}
      />
      {value} {name}
    </div>
  );
};

export default CatalogFeaturesItem;
