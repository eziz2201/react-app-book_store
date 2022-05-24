import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookApi } from "../../services/bookServises";
import { IBookDetailsApi } from "../../services/types/intex";
import { StyledDetailsBook } from "./styles";

const DetailsBook = () => {
  const { id = '' } = useParams();
  const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>()
  useEffect(() => {
    bookApi.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

  return <StyledDetailsBook>
    <h1>{detailsBook?.title ? detailsBook.title : 'No Title'}</h1>
  </StyledDetailsBook>;
};

export default DetailsBook;
