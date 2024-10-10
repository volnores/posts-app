import React from "react";
import style from "../SearchByKeywords/style.module.css";

const SearchByKeywords = ({ keywords, setKeywords }) => {
  return (
    <div className={style.search}>
      <form>
        <input
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Search..."
          className={style.input}
        />
      </form>
    </div>
  );
};

export default SearchByKeywords;
