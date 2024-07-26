import CatalogList from "../../components/CatalogList/CatalogList";
import CatalogSearchForm from "../../components/CatalogSearchForm/CatalogSearchForm";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.wrapper}>
      <CatalogSearchForm/>
      <CatalogList />
    </div>
  );
};

export default CatalogPage;


