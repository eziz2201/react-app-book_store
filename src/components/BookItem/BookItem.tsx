import {
  StyledBookItem,
  StyledImg,
  StyledIsbn,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from "./styles";

const BookItem = ({ image, title, isbn13, subtitle, price }: any) => {
  return (
    <StyledBookItem to={"/books/" + isbn13} key={isbn13}>
      <StyledImg src={image} alt={title} />
      <StyledTitle>{title === "" ? "No title" : title}</StyledTitle>
      <StyledIsbn>{isbn13 === "" ? "No isbn" : isbn13}</StyledIsbn>
      <StyledSubtitle>
        {subtitle === "" ? "No subtitle" : subtitle}
      </StyledSubtitle>
      <StyledPrice>{price === "" ? "For free" : price}</StyledPrice>
    </StyledBookItem>
  );
};

export default BookItem;
