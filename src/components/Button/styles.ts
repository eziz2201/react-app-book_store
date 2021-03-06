import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledButton = styled.button`
  width: 100%;
  padding: 18px;
  background-color: ${colors.PRIMARY};
  border: none;
  ${typography.BUTTON};
  color: ${colors.WHITE};
  text-align: center;
  transition: background 0.5s;
  &:hover {
    background-color: ${colors.PRIMARY_SECOND};
  }

  &:active {
    background-color: ${colors.PRIMARY};
  }

  &:disabled {
    background-color: ${colors.SECONDARY};
  }
`;
