import { configureStore } from "@reduxjs/toolkit";
import detailsBooksSlice from "./slices/detailsBooksSlice";
import newBooksSlice from "./slices/newBooksSlice";
import searchBooksSlice from "./slices/searchBooksSlice";

import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    newBooks: newBooksSlice,
    searchBooks: searchBooksSlice,
    detailsBook: detailsBooksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
