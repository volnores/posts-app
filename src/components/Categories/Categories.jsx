import React from "react";
import style from "../Categories/style.module.css";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className={style.categories}>
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
