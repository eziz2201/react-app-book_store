import NewBooks from "../../components/NewBooks/NewBooks";
import BooksSlider from "../../components/BooksSlider/BooksSlider";
import { useAppSelector } from "../../store/hooks/hooks";
import { getRecommendedBooks } from "../../store/selectors/recommendedBooksSelector";

import { StyledHome, StyledTitle } from "./styles";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  const recommendedBooks = useAppSelector(getRecommendedBooks);
  return (
    <StyledHome>
      <StyledTitle>Recommended Books</StyledTitle>
      <BooksSlider books={recommendedBooks} />
      <NewBooks />
      <Subscribe />
    </StyledHome>
  );
};

export default Home;
