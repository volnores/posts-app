import axios from "axios";
import { IPosts } from "../interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

enum STATUS {
  Error = "error",
  Ok = "ok",
}

export interface NewsApiResponse {
  news: IPosts[];
  page: number;
  status: STATUS;
}

export interface IParams {
  page_number?: number;
  page_size?: number;
  category?: string | null;
  keywords?: string;
}

export const getPosts = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}: IParams): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
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
    return { news: [], page: 1, status: STATUS.Error };
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
