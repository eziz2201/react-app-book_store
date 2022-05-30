import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import detailsBooksSlice from "./slices/detailsBooksSlice";
import favoriteBooksSlice from "./slices/favoriteBooksSlice";
import newBooksSlice from "./slices/newBooksSlice";
import searchBooksSlice from "./slices/searchBooksSlice";

import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    newBooks: newBooksSlice,
    searchBooks: searchBooksSlice,
    detailsBook: detailsBooksSlice,
    favoriteBook: favoriteBooksSlice,
    cart: cartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
