import React, { useEffect, useState } from "react";
import style from "../Main/style.module.css";
import NewsPost from "../../components/NewsPost/NewsPost";
import { getPosts } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";

const Main = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.news);
      };
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main className={style.main}>
      {posts.length > 0 ? <NewsPost posts={posts[0]} /> : null}

      <NewsList posts={posts} />
    </main>
  );
};

export default Main;
