import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${colors.WHITE};
  border: none;

  &:hover {
    path {
      fill: ${colors.RED};
    }
  }

  &:disabled {
    path {
      fill: ${colors.SECONDARY};
    }
  }
`;
