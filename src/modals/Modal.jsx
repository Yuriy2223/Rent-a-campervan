import { NavLink, Outlet } from "react-router-dom";
import css from "./Modal.module.css";
import Icons from "../components/Icons/Icons";

const Modal = ({ closeModal, camper }) => {
  return (
    <div className={css.modalWrapper} onClick={closeModal}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.hederModal}>
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
        <div className={css.rateLocation}>
          <div className={css.rate}>
            <Icons
              width={16}
              height={16}
              iconName="star"
              className={css.svgStar}
            />
            {camper.rating}({camper.reviews.length} Reviews)
          </div>
          <div className={css.location}>
            <Icons
              width={20}
              height={20}
              iconName="map"
              className={css.svgMap}
            />
            {camper.location}
          </div>
        </div>
        <p className={css.number}>€{camper.price}.00</p>
        <div className={css.imgContainer}>
          <img
            className={css.imgBox}
            src={camper.gallery[0]}
            alt={camper.name}
          />
          <img
            className={css.imgBox}
            src={camper.gallery[1]}
            alt={camper.name}
          />
          <img
            className={css.imgBox}
            src={camper.gallery[2]}
            alt={camper.name}
          />
        </div>
        <p className={css.description}>{camper.description}</p>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Modal;
