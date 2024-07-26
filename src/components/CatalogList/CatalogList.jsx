import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import { selectFilteredCampers } from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import Pagination from "../Pagination/Pagination";
import css from "./CatalogList.module.css";

const CatalogList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const campersToDisplay = filteredCampers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredCampers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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
      <div className={css.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CatalogList;
