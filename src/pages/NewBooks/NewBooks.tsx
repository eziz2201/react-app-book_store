import { useEffect } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getNewBooks,
  getNewBooksStatus,
} from "../../store/selectors/newBooksSelectors";
import { fetchNewBooks } from "../../store/slices/newBooksSlice";
import { StyledBooks, StyledNewBooks, StyledTitle } from "./styles";

const NewBooks = () => {
  const newBooks = useAppSelector(getNewBooks);
  const status = useAppSelector(getNewBooksStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }

  return (
    <StyledNewBooks>
      <StyledTitle>NEW RELEASES BOOKS</StyledTitle>
      <StyledBooks className="list-group">
        {newBooks.books.map((book) => {
          return <BookItem key={book.isbn13} book={book} />;
        })}
      </StyledBooks>
    </StyledNewBooks>
  );
};

export default NewBooks;
