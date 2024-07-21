import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import SearchFormLocation from "../SearchFormLocation/SearchFormLocation";
import SearchFormFilters from "../SearchFormFilters/SearchFormFilters";
import SearchFormType from "../SearchFormType/SearchFormType";
import css from "./SearchForm.module.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCampers(filterState));
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
      <SearchFormLocation />
      <SearchFormFilters />
      <SearchFormType />
      <button type="submit" className={css.btnSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
