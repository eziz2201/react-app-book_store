import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledTabList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 161px) 1fr;
  border-bottom: 1px solid ${colors.GRAY};

  ${media.PHONE} {
    grid-template-columns: repeat(3, 129px) 1fr;
  }
`;
export const StyledTab = styled.div`
  padding: 0 40px 24px;
  ${typography.S1};
  text-align: center;
  color: ${colors.SECONDARY};
  cursor: pointer;
  &:hover {
    color: ${colors.PRIMARY};
  }
  &:active {
    border-bottom: 2px solid ${colors.PRIMARY};
  }
`;
