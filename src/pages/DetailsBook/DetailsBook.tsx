import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getDetailsBook,
  getDetailsBookStatus,
} from "../../store/selectors/detailsBookSelectors";
import { fetchBookDetails } from "../../store/slices/detailsBooksSlice";
import {
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
        <StyledBookImage
          src={detailsBook.image}
          alt={detailsBook.image}
        ></StyledBookImage>
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
          <StyledButtonContainer>
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
