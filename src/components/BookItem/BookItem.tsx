import { INewBookApi } from "../../services/types/intex";
import {
  StyledBookItem,
  StyledImg,
  StyledIsbn,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

interface IBook {
  book: INewBookApi
}

const BookItem = ({ book }: IBook) => {
  return (
    <StyledBookItem to={"/books/" + book.isbn13} key={book.isbn13}>
      <StyledImg src={book.image} alt={book.title} />
      <StyledTitle>{book.title === "" ? "No title" : book.title}</StyledTitle>
      <StyledIsbn>{book.isbn13 === "" ? "No isbn" : book.isbn13}</StyledIsbn>
      <StyledSubtitle>
        {book.subtitle === "" ? "No subtitle" : book.subtitle}
      </StyledSubtitle>
      <StyledPrice>{book.price === "" ? "For free" : book.price}</StyledPrice>
    </StyledBookItem>
  );
};

export default BookItem;
