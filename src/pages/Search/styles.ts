import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSearch = styled.div`
  padding: 72px 0 150px;
`;
const StyledTitle = styled.h1`
  ${typography.H1};
  color: ${colors.PRIMARY};
  margin-bottom: 30px;
`;
const StyledSubtitle = styled.h3`
  ${typography.S1};
  color: ${colors.SECONDARY};
  margin-bottom: 50px;
`;

const StyledBooks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin-bottom: 100px;
`;

export { StyledBooks, StyledSearch, StyledSubtitle, StyledTitle };
