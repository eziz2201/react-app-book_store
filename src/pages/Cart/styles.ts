import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledCart = styled.div`
  padding: 77px 0 150px;
  min-height: 60vh;
  height: 100%;
`;
const StyledBackButton = styled.div`
  cursor: pointer;
  path {
    fill: ${colors.PRIMARY};
  }
`;

const StyledTitle = styled.h1`
  margin-top: 37px;
  margin-bottom: 50px;
  ${typography.H1}
  color: ${colors.PRIMARY};
`;

const StyledText = styled.p`
  text-align: center;
  ${typography.H3}
  color: ${colors.PRIMARY};
`;

const StyledCheckList = styled.div`
  width: 256px;
  margin-top: 48px;
  margin-bottom: 72px;
  margin-left: auto;
  ${media.TABLET} {
    width: 328px;
  }
  ${media.PHONE} {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 56px;
  }
`;

const StyledCheckItem = styled.p`
  display: flex;
  justify-content: space-between;
  ${typography.TAB};
  color: ${colors.SECONDARY};
  &:first-child {
    margin-bottom: 16px;
  }
  span {
    color: ${colors.PRIMARY};
  }
`;

const StyledCheckTotal = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  ${typography.H2};
  color: ${colors.PRIMARY};
`;

const StyledCheckButton = styled.button`
  width: 100%;
  background-color: ${colors.WHITE};
`;

export {
  StyledCheckButton,
  StyledCheckItem,
  StyledCheckList,
  StyledCheckTotal,
  StyledBackButton,
  StyledCart,
  StyledText,
  StyledTitle,
};
