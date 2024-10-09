import React, { useEffect, useState } from "react";
import style from "../Main/style.module.css";
import NewsPost from "../../components/NewsPost/NewsPost";
import { getPosts } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = 10;

  const fetchPosts = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getPosts(currentPage, pageSize);
      setPosts(response.news);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    {
      currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
    }
  };

  const handlePrevPage = () => {
    {
      currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
    }
  };

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);
  return (
    <main className={style.main}>
      {posts.length > 0 && !isLoading ? (
        <NewsPost posts={posts[0]} />
      ) : (
        <Skeleton type={"post"} count={1} />
      )}

      <Pagination
        totalPages={totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleCurrentPage={handleCurrentPage}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList posts={posts} />
      ) : (
        <Skeleton type={"postslist"} count={10} />
      )}
    </main>
  );
};

export default Main;
