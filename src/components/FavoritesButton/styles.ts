import styled from "styled-components";
import { colors } from "../../ui/colors";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 16px;
  transition: background 0.3s;
  path {
    transition: all 0.3s;
    stroke: ${colors.WHITE};
  }
  background-color: ${colors.PRIMARY};
  &:hover {
    background-color: ${colors.PRIMARYSECOND};
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
