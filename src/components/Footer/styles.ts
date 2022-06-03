import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 36px 0;
  border-top: 1px solid ${colors.GRAY};
`;

const StyledText = styled.p`
  ${typography.S1}
  color: ${colors.SECONDARY};
  &:last-child {
    justify-self: end;
  }
`;

export { StyledFooter, StyledText };
