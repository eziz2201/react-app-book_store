import { IBook } from "../../types/types";

import BookItem from "../BookItem/BookItem";
import { StyledBook, StyledSlider } from "./styles";

interface IBooksSlider {
  books: IBook[];
}

const BooksSlider = ({ books }: IBooksSlider) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      {books.map((book) => (
        <StyledBook key={book.isbn13}>
          <BookItem book={book} />
        </StyledBook>
      ))}
    </StyledSlider>
  );
};

export default BooksSlider;
