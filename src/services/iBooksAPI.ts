import axios from "axios";
import {
  IBookISBN13,
  IBookDetails,
  IResponseNewBooks,
  IResponseSearch,
  ISearchResult,
} from "types";

class booksAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL_BOOKS_API;
  private readonly ENDPOINTS = {
    new: "new",
    search: "search",
    books: "books",
  };
  API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get<IResponseNewBooks>(this.ENDPOINTS.new);

    return data;
  }

  public async searchBooks({ searchValue, page }: ISearchResult) {
    const { data } = await this.API.get<IResponseSearch>(
      `${this.ENDPOINTS.search}/${searchValue}/${page}`,
    );

    return data;
  }

  public async getBookDetails({ isbn13 }: IBookISBN13) {
    const { data } = await this.API.get<IBookDetails>(`${this.ENDPOINTS.books}/${isbn13}`);

    return data;
  }
}

export const restBooksAPI = new booksAPI();
