import React from "react";
import TimeAgo from "../../TimeAgo/TimeAgo";
import style from "../NewsPost/style.module.css";
import Image from "../Image/Image";

const NewsPost = ({ posts }) => {
  return (
    <div className={style.post}>
      <Image image={posts.image} />
      <h3 className={style.title}>{posts.title}</h3>
      <p className={style.info}>
        {TimeAgo(posts.published)} by {posts.author}
      </p>
    </div>
  );
};

export default NewsPost;
