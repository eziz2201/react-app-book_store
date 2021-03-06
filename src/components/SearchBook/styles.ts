import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSearchBook = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY};
  border-top: 1px solid ${colors.WHITE};
  :first-of-type {
    border-top: 1px solid ${colors.GRAY};
  }
  text-decoration: none;
  transition: background .9s;
  :hover {
    background-color: ${colors.GRAY};
  }
`;
const StyledImage = styled.div`
  min-width: 80px;
  height: 80px;
  background-color: ${colors.BLUE};
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledTitle = styled.div`
  color: ${colors.PRIMARY};
  ${typography.SEARCH_BOOK};
`;

export { StyledSearchBook, StyledImage, StyledTitle };
