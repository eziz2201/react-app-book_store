import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

interface Active {
  isActive: boolean;
}

const StyledPageControl = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px;
`;
const StyledNavigationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 11px;
  background-color: ${colors.WHITE};
  ${typography.B2};
  color: ${colors.SECONDARY};
  transition: color 0.5s;
  path {
    transition: fill 0.5s;
    fill: ${colors.SECONDARY};
  }
  &:hover {
    color: ${colors.PRIMARY};
  }
  &:hover path {
    fill: ${colors.PRIMARY};
  }
`;
const StyledNumberButtonList = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledNumberButton = styled.button<Active>`
  display: flex;
  align-items: center;
  background-color: ${colors.WHITE};
  ${typography.B2};
  color: ${({ isActive }) =>
    isActive ? `${colors.PRIMARY}` : `${colors.SECONDARY}`};
  transition: color 0.3s;
  &:hover {
    color: ${colors.PRIMARY};
  }
`;

export {
  StyledPageControl,
  StyledNavigationButton,
  StyledNumberButton,
  StyledNumberButtonList,
};
