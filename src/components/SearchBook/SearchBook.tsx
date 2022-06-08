import { IBook } from "../../types/types";
import { StyledImage, StyledSearchBook, StyledTitle } from "./styles";

interface ISearhBook {
  book: IBook;
}

const SearchBook = ({ book }: ISearhBook) => {
  return (
    <StyledSearchBook to={`/books/${book.isbn13}`}>
      <StyledImage>
        <img src={book.image} alt="#" />
      </StyledImage>
      <StyledTitle>{book.title}</StyledTitle>
    </StyledSearchBook>
  );
};

export default SearchBook;
