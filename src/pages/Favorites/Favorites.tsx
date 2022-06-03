import { useNavigate } from "react-router-dom";
import FavoriteBook from "../../components/FavoriteBook/FavoriteBook";
import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppSelector } from "../../store/hooks/hooks";
import { getFavoriteBooks } from "../../store/selectors/favoriteBooksSelectors";
import { IFavoriteBook } from "../../types/types";
import {
  StyledBackButton,
  StyledFavorites,
  StyledText,
  StyledTitle,
} from "./styles";

const Favorites = () => {
  const navigate = useNavigate();
  const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <StyledFavorites>
      <StyledBackButton onClick={handleBack}>
        <IconSelector id="back" />
      </StyledBackButton>
      <StyledTitle>FAVORITES</StyledTitle>
      {favoriteBooks.length === 0 ? (
        <StyledText>You have not favorite books!</StyledText>
      ) : (
        favoriteBooks.map((book) => (
          <FavoriteBook key={book.isbn13} book={book} />
        ))
      )}
    </StyledFavorites>
  );
};

export default Favorites;
