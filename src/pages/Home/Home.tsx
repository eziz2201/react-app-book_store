import NewBooks from "../../components/NewBooks/NewBooks";
import BooksSlider from "../../components/BooksSlider/BooksSlider";
import { useAppSelector } from "../../store/hooks/hooks";
import { getRecommendedBooks } from "../../store/selectors/recommendedBooksSelector";

import { StyledHome, StyledTitle } from "./styles";

const Home = () => {
  const recommendedBooks = useAppSelector(getRecommendedBooks);
  return (
    <StyledHome>
      <StyledTitle>Recommended Books</StyledTitle>
      <BooksSlider books={recommendedBooks} />
      <NewBooks></NewBooks>
    </StyledHome>
  );
};

export default Home;
