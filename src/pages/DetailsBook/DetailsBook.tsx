import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getDetailsBook,
  getDetailsBookStatus,
} from "../../store/selectors/detailsBookSelectors";
import { addCart } from "../../store/slices/cartSlice";
import { fetchBookDetails } from "../../store/slices/detailsBooksSlice";
import { addFavorite } from "../../store/slices/favoriteBooksSlice";
import { IBookDetails, IFavoriteBook } from "../../types/types";
import {
  StyledAddFovorite,
  StyledArrowDown,
  StyledBackButton,
  StyledBookImage,
  StyledBookInfo,
  StyledButtonContainer,
  StyledDetailsBook,
  StyledIcons,
  StyledIconsItem,
  StyledMainCointainer,
  StyledParams,
  StyledPrice,
  StyledRaiting,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTitle,
} from "./styles";

const DetailsBook = () => {
  const { id = "" } = useParams();

  const detailsBook = useAppSelector(getDetailsBook);
  const status = useAppSelector(getDetailsBookStatus);
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("description");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDescription = () => {
    setActive("description");
  };

  const handleAuthors = () => {
    setActive("authors");
  };

  const handleFavorite = (detailsBook: IFavoriteBook) => {
    dispatch(
      addFavorite({
        image: detailsBook.image,
        title: detailsBook.title,
        authors: detailsBook.authors,
        year: detailsBook.year,
        price: detailsBook.price,
        isbn13: detailsBook.isbn13,
      })
    );
  };
  const handleCart = (detailsBook: IBookDetails) => {
    dispatch(
      addCart({
        image: detailsBook.image,
        title: detailsBook.title,
        authors: detailsBook.authors,
        year: detailsBook.year,
        price: detailsBook.price,
        isbn13: detailsBook.isbn13,
        quantity: 1,
        totalPrice: detailsBook.price.slice(1),
      })
    );
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }

  return (
    <StyledDetailsBook>
      <StyledBackButton onClick={handleBack}>
        <IconSelector id="back" />
      </StyledBackButton>
      <StyledTitle>
        {detailsBook?.title ? detailsBook.title : "No Title"}
      </StyledTitle>
      <StyledMainCointainer>
        <StyledBookImage>
          <img src={detailsBook.image} alt={detailsBook.image} />
          <StyledAddFovorite onClick={() => handleFavorite(detailsBook)}>
            <FavoritesButton />
          </StyledAddFovorite>
        </StyledBookImage>

        <StyledBookInfo>
          <StyledPrice>
            {detailsBook.price} <StyledRaiting>{"*****"}</StyledRaiting>
          </StyledPrice>
          <StyledParams>
            Authors<span>{detailsBook.authors}</span>
          </StyledParams>
          <StyledParams>
            Publisher<span>{detailsBook.year}</span>
          </StyledParams>
          <StyledParams>
            Language<span>{detailsBook.language}</span>
          </StyledParams>
          <StyledParams>
            Format<span>{"Paper book / ebook (PDF)"}</span>
          </StyledParams>
          <StyledArrowDown>
            More details <IconSelector id="arrow-down"></IconSelector>
          </StyledArrowDown>
          <StyledButtonContainer onClick={() => handleCart(detailsBook)}>
            <Button text="ADD TO CART"></Button>
          </StyledButtonContainer>
        </StyledBookInfo>
      </StyledMainCointainer>
      <StyledTabList>
        <StyledTab
          isActive={active === "description"}
          onClick={handleDescription}
        >
          Description
        </StyledTab>
        <StyledTab isActive={active === "authors"} onClick={handleAuthors}>
          Authors
        </StyledTab>
      </StyledTabList>
      <StyledTabPanel>
        {active === "description"
          ? detailsBook.desc
          : active === "authors"
          ? detailsBook.authors
          : "oops"}
      </StyledTabPanel>
      <StyledIcons>
        <StyledIconsItem href="https://facebook.com">
          <IconSelector id="facebook" />
        </StyledIconsItem>
        <StyledIconsItem href="https://twitter.com">
          <IconSelector id="twitter" />
        </StyledIconsItem>
        <StyledIconsItem href="https://linkedin.com">
          <IconSelector id="linkedin" />
        </StyledIconsItem>
      </StyledIcons>
    </StyledDetailsBook>
  );
};

export default DetailsBook;
