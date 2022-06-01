import { useAppDispatch } from "../../store/hooks/hooks";
import { removeFavorite } from "../../store/slices/favoriteBooksSlice";
import { IFavoriteBook } from "../../store/slices/types";
import IconSelector from "../IconSelector/IconSelector";
import {
  StyledBookInfo,
  StyledFavoriteBook,
  StyledImage,
  StyledPrice,
  StyledRaiting,
  StyledText,
  StyledTitle,
  StyledRemoveFavoriteButton,
} from "./styles";

interface IBook {
  book: IFavoriteBook;
}

const FavoriteBook = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(book));
  };
  return (
    <StyledFavoriteBook>
      <StyledImage>
        <img src={book.image} alt={book.image} />
      </StyledImage>
      <StyledBookInfo>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledText>
          by {book.authors}, {book.year}
        </StyledText>
        <StyledPrice>
          {book.price}
          <StyledRaiting>*****</StyledRaiting>
        </StyledPrice>
      </StyledBookInfo>
      <StyledRemoveFavoriteButton onClick={handleRemoveFavorite}>
        <IconSelector id="favorites" />
      </StyledRemoveFavoriteButton>
    </StyledFavoriteBook>
  );
};

export default FavoriteBook;
