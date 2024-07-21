import CatalogList from "../../components/CatalogList/CatalogList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <SearchForm />
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
