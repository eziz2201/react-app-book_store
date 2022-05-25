import { RootState } from "../store";

export const getSearchBooks = (state: RootState) => state.searchBooks.results;
export const getSearchBooksStatus = (state: RootState) => state.searchBooks.status;
export const getSearchBooksError = (state: RootState) => state.searchBooks.error;
