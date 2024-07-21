import { selectCampers, selectFavorites } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./FavoritesCampers.module.css";

const FavoritesCampers = () => {
  const campersList = useSelector(selectCampers);
  const favorites = useSelector(selectFavorites);
  const favoriteList = campersList.filter((camper) =>
    favorites.includes(camper.id)
  );

  return (
    <>
      {favoriteList.length > 0 ? (
        <ul className={css.list}>
          {favoriteList.map((camper) => (
            <li className={css.item} key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.message}>
         Unfortunately, you have not added any campers to your favorites :(
        </div>
      )}
    </>
  );
};

export default FavoritesCampers;
