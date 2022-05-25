import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookServises";
import { INewBooksApi, ISearchBooksApi } from "../../services/types/intex";
import { ISearchBooksSlice } from "./types";

interface IArg {
  title: string;
  page: string;
}

const initialState: ISearchBooksSlice = {
  results: {
    books: [],
    error: null,
    total: "0",
  },
  error: null,
  status: "idle",
};

export const fetchSearchBooks = createAsyncThunk(
  "searchBooks/fetchSearchBooks",
  async ({ title, page }: IArg) => {
    return await bookApi.getBooksBySearch(title, page);
  }
);

const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.results = payload;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default searchBooksSlice.reducer;
