export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface INewBooks {
  error: string;
  total: string;
  books: IBook[];
}

export interface IBookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: {
    [key: string]: string;
  };
}

export interface ICartItem {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  summary: number;
}

export interface IResponseSearch {
  error: string;
  total: string;
  page: string;
  books: IBook[];
}

export interface ISearchResult {
  searchValue: string | undefined;
  page: string | undefined;
}

export interface IBookISBN13 {
  isbn13: string | undefined;
}
