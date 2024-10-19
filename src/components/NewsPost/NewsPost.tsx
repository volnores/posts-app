import React, { useContext } from "react";
import TimeAgo from "../../TimeAgo/TimeAgo";
import style from "../NewsPost/style.module.css";
import Image from "../Image/Image";
import { IPosts } from "../../interfaces";
import { themeProvider } from "../../App";

interface Props {
  posts: IPosts;
}

const NewsPost = ({ posts }: Props) => {
  const { theme } = useContext(themeProvider);
  return (
    <div className={`${style.post} ${theme ? style.dark : style.light}`}>
      <Image image={posts.image} />
      <h3 className={style.title}>{posts?.title}</h3>
      <p className={style.info}>
        {TimeAgo(posts?.published)} by {posts?.author}
      </p>
    </div>
  );
};

export default NewsPost;
