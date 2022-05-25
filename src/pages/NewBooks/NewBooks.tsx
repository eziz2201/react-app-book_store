import { useEffect } from "react";
import BookItem from "../../components/BookItem/BookItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getNewBooks,
  getNewBooksError,
  getNewBooksStatus,
} from "../../store/selectors/newBooksSelectors";
import { fetchNewBooks } from "../../store/slices/newBooksSlice";
import { StyledBooks, StyledNewBooks, StyledTitle } from "./styles";

const NewBooks = () => {
  const newBooks = useAppSelector(getNewBooks);
  const status = useAppSelector(getNewBooksStatus);
  const error = useAppSelector(getNewBooksError);

  const dispatch = useAppDispatch();
  console.log(newBooks);

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
          return (
            <BookItem
              image={book.image}
              title={book.title}
              isbn13={book.isbn13}
              subtitle={book.subtitle}
              price={book.price}
            />
          );
        })}
      </StyledBooks>
    </StyledNewBooks>
  );
};

export default NewBooks;
