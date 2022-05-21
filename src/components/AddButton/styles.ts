import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledButton = styled.button`
  padding: 18px;
  background-color: ${colors.PRIMARY};
  border: none;
  ${typography.H3};
  color: ${colors.WHITE};
  text-align: center;

  &:hover {
    background-color: ${colors.PRIMARY2};
  }

  &:active {
    background-color: ${colors.PRIMARY};
  }

  &:disabled {
    background-color: ${colors.SECONDARY};
  }
`;