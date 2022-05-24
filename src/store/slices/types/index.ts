import { INewBooksApi } from "../../../services/types/intex";


export interface IUserStrore {
  isAuth: boolean;
  email: string | null;
}

export interface INewBooksStrore {
  results: INewBooksApi;
  error: any;
  status: RequestStatusType;
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
