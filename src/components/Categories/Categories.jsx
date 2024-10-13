import React from "react";
import style from "../Categories/style.module.css";

const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sliderRef,
}) => {
  return (
    <div className={style.categories} ref={sliderRef}>
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
          className={selectedCategory === item ? style.active : style.default}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
