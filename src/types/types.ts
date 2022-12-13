export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IResponseNewBooks {
  error: string;
  total: string;
  books: IBook[];
}

export interface IResponseBook {
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

export interface IResponseSearch {
  error: string;
  total: string;
  page: string;
  books: IBook[];
}

export interface ISearchParams {
  name: string;
  page: string;
}

export interface ISearchResult {
  searchValue: string;
  page: string;
}

export interface IBookISBN13 {
  isbn13: string;
}
