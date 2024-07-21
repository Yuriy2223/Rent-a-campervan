import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations";
import FavoritesCampers from "../../components/FavoritesCampers/FavoritesCampers";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Follow your favorite campers.</h1>
      <FavoritesCampers />
    </div>
  );
};

export default FavoritesPage;
