import React, { useEffect, useState } from "react";
import style from "../Main/style.module.css";
import NewsPost from "../../components/NewsPost/NewsPost";
import { getCategories, getPosts } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const pageSize = 10;
  const totalPages = 10;

  const fetchPosts = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getPosts({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
      });
      setPosts(response.news);
      setIsLoading(false);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
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
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage, selectedCategory]);
  return (
    <main className={style.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
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
