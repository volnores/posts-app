import React, { useRef } from "react";
import style from "../Slider/style.module.css";
import Categories from "../Categories/Categories";

const Slider = ({ categories, setSelectedCategory, selectedCategory }) => {
  const sliderRef = useRef(null);

  const step = 150;

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={style.slider}>
      <button onClick={scrollLeft} className={style.arrow}>
        {"<"}
      </button>
      <Categories
        sliderRef={sliderRef}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <button onClick={scrollRight} className={style.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
