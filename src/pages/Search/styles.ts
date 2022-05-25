import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledSearch = styled.div`
  padding: 72px 0;
`;
export const StyledTitle = styled.h1`
  ${typography.H1};
  color: ${colors.PRIMARY};
  margin-bottom: 30px;
`;
export const StyledSubtitle = styled.h3`
  ${typography.S1};
  color: ${colors.SECONDARY};
  margin-bottom: 50px;
`;

export const StyledBooks = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 0;
  margin-bottom: 100px;
`;
