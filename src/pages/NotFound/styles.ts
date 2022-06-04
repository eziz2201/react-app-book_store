import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 0;
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
`;

const StyledImage = styled.div`
  img {
    width: 350px;
    margin-bottom: 50px;
  }
`;

const StyledTextContainer = styled.div`
  margin-top: 50px;
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
