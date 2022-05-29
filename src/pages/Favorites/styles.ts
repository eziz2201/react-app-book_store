import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledFavorites = styled.div`
  min-height: 60vh;
  height: 100%;
`;
export const StyledBackButton = styled.div`
  margin-top: 77px;
  cursor: pointer;
  path {
    fill: ${colors.PRIMARY};
  }
`;

export const StyledTitle = styled.h1`
  margin-top: 37px;
  margin-bottom: 50px;
  ${typography.H1}
  color: ${colors.PRIMARY};
`;

export const StyledText = styled.p`
text-align: center;
  ${typography.H3}
  color: ${colors.PRIMARY};
`