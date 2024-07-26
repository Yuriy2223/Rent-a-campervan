import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { selectFilteredCampers } from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogList.module.css";

const CatalogList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleNext = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const campersToDisplay = filteredCampers.slice(0, visibleCount);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filteredCampers.length === 0 ? (
          <p className={css.noCamperSearch}>
            There are no campers matching your search
          </p>
        ) : (
          campersToDisplay.map((camper) => (
            <li className={css.item} key={camper.id}>
              <CatalogItem camper={camper} />
            </li>
          ))
        )}
      </ul>
      {visibleCount < filteredCampers.length && (
        <button className={css.btn} onClick={handleNext}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogList;
