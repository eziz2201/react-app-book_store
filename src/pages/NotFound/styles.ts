import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 150px;
`;

const StyledTitle = styled.h1`
  ${typography.H1};
  color: ${colors.PRIMARY};
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  ${media.TABLET} {
    display: grid;
    gap: 0;
  }
`;

const StyledImage = styled.div`
  img {
    width: 350px;
    margin-bottom: 50px;
  }
  ${media.TABLET} {
    margin: 0 auto;
    margin-bottom: 0;
  }
`;

const StyledTextContainer = styled.div`
  margin-top: 50px;
  ${media.TABLET}{
    margin-top: 10px;
  }
`;

const StyledTextTitle = styled.h2`
  margin-bottom: 30px;
  ${typography.H2};
  color: ${colors.PRIMARY};
  text-align: center;
`;

const StyledText = styled.p`
  margin-bottom: 30px;
  ${typography.TAB};
  color: ${colors.SECONDARY};
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  button {
    width: 200px;
  }
`;

export {
  StyledNotFound,
  StyledTitle,
  StyledContainer,
  StyledImage,
  StyledTextContainer,
  StyledLink,
  StyledText,
  StyledTextTitle,
};
