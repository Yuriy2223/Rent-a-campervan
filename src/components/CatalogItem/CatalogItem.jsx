
import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux"; 
import { toggleFavorite } from "../../redux/campers/slice"; 
import Icons from "../Icons/Icons";
import Modal from "../../modals/Modal";
import CatalogFeaturesItem from "../CatalogFeaturesItem/CatalogFeaturesItem";
import css from "./CatalogItem.module.css";

const CatalogItem = ({ camper }) => {
  const dispatch = useDispatch(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(camper.id)) {
      setFavorite(true);
    }
  }, [camper.id]);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, closeModal]);

  const {
    adults,
    transmission,
    engine,
    details,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    id,
  } = camper;

  const set = useMemo(
    () => [
      {
        label: adults === 1 ? "adult" : "adults",
        value: adults,
        iconName: "people",
      },
      {
        label: "",
        value: transmission
          ? transmission.charAt(0).toUpperCase() + transmission.slice(1)
          : "",
        iconName: "automatic",
      },
      {
        label: "",
        value: engine ? engine.charAt(0).toUpperCase() + engine.slice(1) : "",
        iconName: "petrol",
      },
      {
        label: "",
        value:
          details.kitchen > 0
            ? details.kitchen === 1
              ? "Kitchen"
              : `${details.kitchen} kitchens`
            : "",
        iconName: "kitchen",
      },
      {
        label: details.beds === 1 ? "bed" : "beds",
        value: details.beds,
        iconName: "bed",
      },
      {
        label: "",
        value: details.airConditioner > 0 ? "AC" : "",
        iconName: "airConditioner",
      },
    ],
    [adults, transmission, engine, details]
  );

  const handleAddFavorite = useCallback(() => {
    dispatch(toggleFavorite(camper.id)); 
    setFavorite((prevFavorite) => !prevFavorite); 
  }, [camper.id, dispatch]);

  return (
    <div className={css.container}>
      <img className={css.containerImg} src={gallery[0]} alt={name} />
      <div className={css.containerContents}>
        <div className={css.box}>
          <h2 className={css.title}>{name}</h2>
          <p className={css.titleContent}>
            €{price}.00
            <button onClick={handleAddFavorite} className={css.addFavorite}>
              <Icons
                width={24}
                height={24}
                iconName="heart"
                className={favorite ? css.svgHeartActive : css.svgHeart}
              />
            </button>
          </p>
        </div>
        <div className={css.rateLocation}>
          <div className={css.rate}>
            <Icons
              width={16}
              height={16}
              iconName="star"
              className={css.svgStar}
            />
            {rating} ({reviews.length} Reviews)
          </div>
          <div className={css.location}>
            <Icons
              width={20}
              height={20}
              iconName="map"
              className={css.svgMap}
            />
            {location}
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.features}>
          {set.map(
            ({ label, value, iconName }, index) =>
              value && (
                <li
                  className={css.featuresItem}
                  key={`${id}-${iconName}-${index}`}
                >
                  <CatalogFeaturesItem
                    label={label}
                    value={value}
                    iconName={iconName}
                  />
                </li>
              )
          )}
        </ul>
        <button className={css.button} onClick={openModal}>
          Show more
        </button>
        {isModalOpen && <Modal closeModal={closeModal} camper={camper} />}
      </div>
    </div>
  );
};

export default CatalogItem;

