import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice";
import Icons from "../Icons/Icons";
import Modal from "../../modals/Modal";
import CatalogListFeatures from "../CatalogListFeatures/CatalogListFeatures";
import RateLocation from "../RateLocation/RateLocation";
import defaultImage from "../../assets/img3.jpg";
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
    gallery = [],
    name,
    price,
    rating,
    reviews,
    location,
    description,
  } = camper;

  const handleAddFavorite = useCallback(() => {
    dispatch(toggleFavorite(camper.id));
    setFavorite((prevFavorite) => !prevFavorite);
  }, [camper.id, dispatch]);

  const imageSrc = gallery.length > 0 ? gallery[0] : defaultImage;

  return (
    <div className={css.container}>
      <img className={css.containerImg} src={imageSrc} alt={name} />
      <div className={css.containerContents}>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>
          <p className={css.headerContent}>
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
        <RateLocation rating={rating} reviews={reviews} location={location} />
        <p className={css.description}>{description}</p>
        <CatalogListFeatures camper={camper} />
        <button className={css.button} onClick={openModal}>
          Show more
        </button>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            camper={camper}
          />
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
