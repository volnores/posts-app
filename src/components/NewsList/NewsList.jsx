import React from "react";
import style from "../NewsList/style.module.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ posts }) => {
  return (
    <ul className={style.list}>
      {posts?.map((item) => (
        <NewsItem posts={item} key={item.id} />
      ))}
    </ul>
  );
};

export default NewsList;
