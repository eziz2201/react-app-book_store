export interface INewBooksApi {
  books: INewBookApi[];
  error: null;
  total: string;
}

export interface INewBookApi {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}

export interface IBookDetailsApi {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: { [key: string]: string };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

export interface ISearchBooksApi extends INewBooksApi {
  page: string;
}
