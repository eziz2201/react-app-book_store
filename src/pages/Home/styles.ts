import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledHome = styled.div`
  padding: 72px 0;
`;

const StyledTitle = styled.h1`
  ${typography.H1};
  color: ${colors.PRIMARY};
  margin-bottom: 50px;
`;

export { StyledHome, StyledTitle };
