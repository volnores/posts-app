import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getPosts = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_size,
        page_number,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
