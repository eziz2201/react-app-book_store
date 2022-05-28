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
  error: any;
  status: RequestStatusType;
}

export interface IDetailsBookSlice {
  results: IBookDetailsApi;
  error: any;
  status: RequestStatusType;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
