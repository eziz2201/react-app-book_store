import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookItem from "../../components/BookItem/BookItem";
import { bookApi } from "../../services/bookServises";
import { ISearchBooksApi } from "../../services/types/intex";
import {
  StyledBooks,
  StyledSearch,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

const Search = () => {
  const { title = "", page = "" } = useParams();
  const [searchResult, setSearchResult] = useState<ISearchBooksApi>();
  const navigate = useNavigate();

  useEffect(() => {
    bookApi.getBooksBySearch(title, page).then((books) => {
      setSearchResult(books);
    });
  }, [title, page]);

  const handleNextPage = () => {
    if (Number(page) === Math.round(Number(searchResult?.total) / 10)) {
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
  return (
    <StyledSearch>
      <StyledTitle>‘{title}’ SEARCH RESULTS</StyledTitle>
      <StyledSubtitle>Found {searchResult?.total} books</StyledSubtitle>
      <StyledBooks>
        {searchResult?.books.map((book) => {
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
