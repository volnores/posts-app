import React from "react";
import style from "../SearchByKeywords/style.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const SearchByKeywords = ({ keywords, setKeywords }: Props) => {
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
