import CatalogItemFeatures from "../CatalogItemFeatures/CatalogItemFeatures";
import css from "./CatalogListFeatures.module.css";

const CatalogFeaturesList = ({ camper }) => {
  const { id, adults, transmission, engine, details } = camper;

  return (
    <ul className={css.features}>
      {adults > 0 && (
        <li className={css.featuresItem} key={`${id}-people`}>
          <CatalogItemFeatures
            name={adults === 1 ? "adult" : "adults"}
            value={adults}
            iconName="people"
          />
        </li>
      )}
      {transmission && (
        <li className={css.featuresItem} key={`${id}-automatic`}>
          <CatalogItemFeatures
            name=""
            value={transmission.charAt(0).toUpperCase() + transmission.slice(1)}
            iconName="automatic"
          />
        </li>
      )}
      {engine && (
        <li className={css.featuresItem} key={`${id}-petrol`}>
          <CatalogItemFeatures
            name=""
            value={engine.charAt(0).toUpperCase() + engine.slice(1)}
            iconName="petrol"
          />
        </li>
      )}
      {details.kitchen > 0 && (
        <li className={css.featuresItem} key={`${id}-kitchen`}>
          <CatalogItemFeatures
            name=""
            value={
              details.kitchen === 1 ? "Kitchen" : `${details.kitchen} kitchens`
            }
            iconName="kitchen"
          />
        </li>
      )}
      {details.beds > 0 && (
        <li className={css.featuresItem} key={`${id}-bed`}>
          <CatalogItemFeatures
            name={details.beds === 1 ? "bed" : "beds"}
            value={details.beds}
            iconName="bed"
          />
        </li>
      )}
      {details.airConditioner > 0 && (
        <li className={css.featuresItem} key={`${id}-ac`}>
          <CatalogItemFeatures name="" value="AC" iconName="ac" />
        </li>
      )}
    </ul>
  );
};

export default CatalogFeaturesList;
