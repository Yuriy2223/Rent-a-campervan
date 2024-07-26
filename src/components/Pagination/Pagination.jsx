import css from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className={css.paginationWrapper}>
      <button
        className={css.paginationBtn}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Turn back
      </button>
      <div className={css.paginationPage}>
        Page <span className={css.currentPage}>{currentPage}</span> of{" "}
        <span className={css.totalPages}>{totalPages}</span>
      </div>
      <button
        className={css.paginationBtn}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Load more
      </button>
    </div>
  );
};

export default Pagination;
