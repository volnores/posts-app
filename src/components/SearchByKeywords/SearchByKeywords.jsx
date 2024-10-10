import React from "react";

const SearchByKeywords = ({ keywords, setKeywords }) => {
  return (
    <div>
      <form>
        <input value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchByKeywords;
