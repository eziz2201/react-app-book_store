import { configureStore } from "@reduxjs/toolkit";
import newBooksSlice from "./slices/newBooksSlice";
import SearchBooksSlice from "./slices/SearchBooksSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    newBooks: newBooksSlice,
    searchBooks: SearchBooksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
