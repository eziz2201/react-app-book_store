import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border: 1px solid ${colors.GRAY};
  ${typography.B1};
  &::placeholder {
    color: ${colors.SECONDARY};
  }
  &:focus {
    outline: none;
    border: 2px solid ${colors.GRAY};
  }
  &:active {
    border: 1px solid ${colors.GRAY};
  }
  &:disabled {
    background-color: ${colors.GRAY};
  }
`;
