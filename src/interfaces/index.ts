export interface IPosts {
  author: string;
  category: string[];
  description: string;
  id: string;
  image: string | undefined;
  language: string;
  published: string;
  title: string;
  url: UrlType;
}

export interface ICategories {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: any;
  sliderRef: string;
}

export interface IPagination {
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleCurrentPage: (page: number) => void;
  currentPage: number;
}

type UrlType = string | null;
