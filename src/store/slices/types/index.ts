import {
  IBookDetailsApi,
  INewBookApi,
  INewBooksApi,
} from "../../../services/types/intex";

export interface IUserStrore {
  isAuth: boolean;
  email: string | null;
}

export interface INewBooksSlice {
  results: INewBooksApi;
  error: any;
  status: RequestStatusType;
}

export interface ISearchBooksSlice {
  results: {
    error: string | null;
    total: string;
    books: INewBookApi[];
  };
  totalPage: number,
  currentPage: number,
  error: any;
  status: RequestStatusType;
}

export interface IDetailsBookSlice {
  results: IBookDetailsApi;
  error: any;
  status: RequestStatusType;
}

export interface IFavoriteBook {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
}

export interface IFavoriteBooksSlice {
  results: IFavoriteBook[];
}

export interface ICart extends IFavoriteBook {
  quantity: number;
  totalPrice: string;
}

export interface ICartSlice {
  results: ICart[];
  vat: number;
  sumTotal: number;
  total: number;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
