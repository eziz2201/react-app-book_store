import axios from "axios";
import { IBookDetailsApi, INewBooksApi, ISearchBooksApi } from "./types/intex";

class BookService {
  private readonly API_URL = process.env.REACT_APP_API_URL;

  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<INewBooksApi> {
    const { data } = await this.api.get<INewBooksApi>("/new");
    return data;
  }

  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.api.get<IBookDetailsApi>(`/books/${isbn}`);
    return data;
  }

  public async getBooksBySearch(
    title: string,
    page: string
  ): Promise<ISearchBooksApi> {
    const { data } = await this.api.get<ISearchBooksApi>(
      `/search/${title}/${page}`
    );
    return data;
  }
}

export const bookApi = new BookService();
