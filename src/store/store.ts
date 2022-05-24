import { configureStore } from "@reduxjs/toolkit";
import newBooksSlice from "./slices/newBooksSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    newBooks: newBooksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
