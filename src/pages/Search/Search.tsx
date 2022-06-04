import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import Loading from "../../components/Loading/Loading";
import PageControl from "../../components/PageControl/PageControl";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getSearchBooks,
  getSearchBooksStatus,
  getSearchBooksTotalPage,
} from "../../store/selectors/searchBooksSelectors";
import {
  fetchSearchBooks,
  setCurrentPage,
} from "../../store/slices/searchBooksSlice";
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
  const totalPage = useAppSelector(getSearchBooksTotalPage);

  const dispatch = useAppDispatch();

  const handlePage = (item: number) => {
    navigate(`/search/${title}/${item}`);
  };

  const handleNextPage = () => {
    if (Number(page) === totalPage) {
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
    dispatch(setCurrentPage(Number(page)));
  }, [dispatch, title, page]);

  if (status === "loading") {
    return <Loading />;
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
      <PageControl
        handlePrevPage={handlePrevPage}
        handlePage={handlePage}
        handleNextPage={handleNextPage}
        totalPage={totalPage}
      />
      <Subscribe />
    </StyledSearch>
  );
};

export default Search;
