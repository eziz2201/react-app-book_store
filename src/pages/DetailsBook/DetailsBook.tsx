import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookApi } from "../../services/bookServises";
import { IBookDetailsApi } from "../../services/types/intex";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getDetailsBook,
  getDetailsBookStatus,
} from "../../store/selectors/detailsBookSelectors";
import { fetchBookDetails } from "../../store/slices/detailsBooksSlice";
import { StyledDetailsBook } from "./styles";

const DetailsBook = () => {
  const { id = "" } = useParams();

  const detailsBook = useAppSelector(getDetailsBook);
  const status = useAppSelector(getDetailsBookStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }

  return (
    <StyledDetailsBook>
      <h1>{detailsBook?.title ? detailsBook.title : "No Title"}</h1>
    </StyledDetailsBook>
  );
};

export default DetailsBook;
