import React from "react";
import style from "../Pagination/style.module.css";

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePrevPage,
  handleCurrentPage,
  currentPage,
}) => {
  return (
    <div className={style.wrapper}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePrevPage}
        className={style.arrow}
      >
        {"<"}
      </button>
      <div className={style.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            className={style.btn}
            key={index}
            disabled={index + 1 === currentPage}
            onClick={() => handleCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={style.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
