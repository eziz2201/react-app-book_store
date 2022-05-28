import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getSearchBooks,
  getSearchBooksStatus,
} from "../../store/selectors/searchBooksSelectors";
import { fetchSearchBooks } from "../../store/slices/searchBooksSlice";
import {
  StyledBooks,
  StyledSearch,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

const Search = () => {
  const { title = "", page = "" } = useParams();
  const navigate = useNavigate();

  const searchBooks = useAppSelector(getSearchBooks);
  const status = useAppSelector(getSearchBooksStatus);

  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (Number(page) === Math.round(Number(searchBooks?.total) / 10)) {
      return;
    }
    navigate(`/search/${title}/${Number(page) + 1}`);
  };

  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };

  useEffect(() => {
    dispatch(fetchSearchBooks({ title, page }));
  }, [dispatch, title, page]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }
  return (
    <StyledSearch>
      <StyledTitle>‘{title}’ SEARCH RESULTS</StyledTitle>
      <StyledSubtitle>Found {searchBooks?.total} books</StyledSubtitle>
      <StyledBooks>
        {searchBooks.books.map((book) => {
          return <BookItem key={book.isbn13} book={book} />;
        })}
      </StyledBooks>
      <div>
        <button type="button" onClick={handlePrevPage}>
          Prev Page
        </button>
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </StyledSearch>
  );
};

export default Search;
