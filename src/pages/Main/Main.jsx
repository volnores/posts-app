import React, { useEffect, useState } from "react";
import style from "../Main/style.module.css";
import NewsPost from "../../components/NewsPost/NewsPost";
import { getPosts } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      setIsLoading(true);
      const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.news);
      };
      fetchPosts();
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <main className={style.main}>
      {posts.length > 0 && !isLoading ? (
        <NewsPost posts={posts[0]} />
      ) : (
        <Skeleton type={"post"} count={1} />
      )}

      {!isLoading ? (
        <NewsList posts={posts} />
      ) : (
        <Skeleton type={"postslist"} count={10} />
      )}
    </main>
  );
};

export default Main;
