import { IBook, IBookDetails } from "../../types/types";

export interface INewBooksApi {
  books: IBook[];
  error: null;
  total: string;
}

export interface IBookDetailsApi extends IBookDetails {}

export interface ISearchBooksApi extends INewBooksApi {
  page: string;
}
