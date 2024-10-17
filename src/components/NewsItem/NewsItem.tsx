import React from "react";
import TimeAgo from "../../TimeAgo/TimeAgo";
import style from "../NewsItem/style.module.css";
import { IPosts } from "../../interfaces";

interface Props {
  posts?: IPosts;
}

const NewsItem = ({ posts }: Props) => {
  return (
    <li className={style.posts}>
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url(${posts?.image})` }}
      ></div>
      <div className={style.info}>
        <h3 className={style.title}>{posts?.title}</h3>
        <p className={style.text}>
          {TimeAgo(posts?.published)} by {posts?.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
