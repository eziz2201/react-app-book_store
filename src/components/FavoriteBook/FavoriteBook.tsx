import { useAppDispatch } from "../../store/hooks/hooks";
import { removeFavorite } from "../../store/slices/favoriteBooksSlice";
import { IFavoriteBook } from "../../types/types";
import IconSelector from "../IconSelector/IconSelector";
import StarRaiting from "../StarRaiting/StarRaiting";
import {
  StyledBookInfo,
  StyledFavoriteBook,
  StyledImage,
  StyledPrice,
  StyledRaiting,
  StyledText,
  StyledTitle,
  StyledRemoveButton,
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
          <StyledRaiting>
            <StarRaiting rating={Number(book.rating)} />
          </StyledRaiting>
        </StyledPrice>
      </StyledBookInfo>
      <StyledRemoveButton onClick={handleRemoveFavorite}>
        <IconSelector id="favorites" />
      </StyledRemoveButton>
    </StyledFavoriteBook>
  );
};

export default FavoriteBook;
