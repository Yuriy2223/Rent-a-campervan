import { useState } from "react";
import ReactDOM from "react-dom";
import Icons from "../components/Icons/Icons";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import RateLocation from "../components/RateLocation/RateLocation";
import css from "./Modal.module.css";

const Modal = ({ closeModal, camper }) => {
  const [activeTab, setActiveTab] = useState(null);

  return ReactDOM.createPortal(
    <div className={css.modalWrapper} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.headerModal}>
          <h2 className={css.title}>{camper.name}</h2>
          <button
            className={css.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <Icons
              width={32}
              height={32}
              iconName="close"
              className={css.close}
            />
          </button>
        </div>
        <RateLocation
          rating={camper.rating}
          reviews={camper.reviews}
          location={camper.location}
        />
        <p className={css.number}>€{camper.price}.00</p>
        <div className={css.imgContainer}>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              className={css.imgBox}
              src={image}
              alt={camper.name}
            />
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.tabs}>
          <button
            className={`${css.tabButton} ${
              activeTab === "features" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`${css.tabButton} ${
              activeTab === "reviews" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div className={css.tabContent}>
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews camper={camper} />}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
