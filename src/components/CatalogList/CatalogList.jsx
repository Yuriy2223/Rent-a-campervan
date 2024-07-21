import { useState, useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogList.module.css";

const CatalogList = () => {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectCampers);
  const [currentCamperId, setCurrentCamperId] = useState(null);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    if (allCampers.length > 0) {
      setCurrentCamperId(allCampers[0].id);
    }
  }, [allCampers]);

  const itemsToShow = 4;

  const getNextCamperId = () => {
    if (allCampers.length === 0) return null;

    const currentIndex = allCampers.findIndex(
      (camper) => camper.id === currentCamperId
    );
    const nextIndex = (currentIndex + itemsToShow) % allCampers.length;
    return allCampers[nextIndex]?.id;
  };

  const startIndex = currentCamperId
    ? allCampers.findIndex((camper) => camper.id === currentCamperId)
    : 0;
  const endIndex = (startIndex + itemsToShow) % allCampers.length;

  const campersToDisplay = () => {
    if (startIndex < endIndex) {
      return allCampers.slice(startIndex, endIndex);
    }
    return [...allCampers.slice(startIndex), ...allCampers.slice(0, endIndex)];
  };

  const handleNext = () => {
    setCurrentCamperId(getNextCamperId());
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {allCampers.length > 0 &&
          campersToDisplay().map((camper) => (
            <li className={css.item} key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          ))}
      </ul>
      <button className={css.btn} onClick={handleNext}>
        Load more
      </button>
    </div>
  );
};

export default CatalogList;
