import { RootState } from "../store";

export const getFavoriteBooks = (state: RootState) =>
  state.favoriteBook.results;
