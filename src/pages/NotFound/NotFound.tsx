import scarecrow from "../../assets/scarecrow.png";
import Button from "../../components/Button/Button";
import {
  StyledContainer,
  StyledImage,
  StyledLink,
  StyledNotFound,
  StyledText,
  StyledTextContainer,
  StyledTextTitle,
  StyledTitle,
} from "./styles";

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledTitle>404 NOT FOUND</StyledTitle>
      <StyledContainer>
        <StyledImage>
          <img src={scarecrow} alt="straw man" />
        </StyledImage>
        <StyledTextContainer>
          <StyledTextTitle>I have bad news for you</StyledTextTitle>
          <StyledText>
            The page you are looking for might be removed or is temporarily
            unavailable
          </StyledText>
          <StyledLink to={"/"}>
            <Button text="Back to homepage" />
          </StyledLink>
        </StyledTextContainer>
      </StyledContainer>
    </StyledNotFound>
  );
};

export default NotFound;
