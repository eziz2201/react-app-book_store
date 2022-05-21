import styled from "styled-components";
import { colors } from "../../ui/colors";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 16px;
  background-color: ${colors.PRIMARY};
  &:hover {
    path {
      stroke: ${colors.RED};
    }
  }
  &:active {
    path {
      fill: ${colors.RED};
    }
  }
  &:disabled {
    background-color: ${colors.SECONDARY};
  }
`;
