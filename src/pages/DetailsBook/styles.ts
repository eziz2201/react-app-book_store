import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

interface IButton {
  isActive: boolean;
}

const StyledDetailsBook = styled.div``;
const StyledBackButton = styled.div`
  margin-top: 77px;
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
const StyledMainCointainer = styled.div`
  display: flex;
  gap: calc(100% - (544px + 448px));
  margin-bottom: 72px;
  ${media.TABLET} {
    display: grid;
  }
`;

const StyledBookImage = styled.div`
  position: relative;
  height: 472px;
  max-width: 544px;
  width: 100%;
  background-color: ${colors.ORANGE};
  img {
    height: 100%;
    width: 100%;
  }
  ${media.TABLET} {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      max-width: 500px;
      width: 100%;
      height: 550px;
    }
  }
  ${media.PHONE} {
    height: 272px;
    img {
      max-width: 300px;
      height: 350px;
    }
  }
`;
const StyledAddFovorite = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledBookInfo = styled.div`
  position: relative;
  max-width: 448px;
  width: 100%;
  padding-top: 42px;
  border-top: 1px solid ${colors.GRAY};
  ${media.TABLET} {
    max-width: 100%;
  }
`;

const StyledPrice = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  ${typography.H2}
  color: ${colors.PRIMARY};
`;

const StyledParams = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  ${typography.B1}
  color: ${colors.SECONDARY};
  span {
    color: ${colors.PRIMARY};
  }
`;
const StyledArrowDown = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 55px;
  cursor: pointer;
  ${typography.TAB}
  color: ${colors.PRIMARY};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: end;
`;

const StyledTabList = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid ${colors.GRAY};
  margin-bottom: 50px;
`;

const StyledTab = styled.button<IButton>`
  padding: 0 40px 24px;
  background-color: ${colors.WHITE};
  ${typography.TAB}
  color: ${colors.SECONDARY};
  cursor: pointer;
  &:hover {
    color: ${colors.PRIMARYSECOND};
    border-bottom: 2px solid ${colors.PRIMARYSECOND};
  }

  border-bottom: ${({ isActive }) =>
    isActive
      ? `2px solid ${colors.PRIMARY};
    color: ${colors.PRIMARY};
    `
      : ""};
`;

const StyledTabPanel = styled.div`
  min-height: 128px;
  ${typography.B1}
  color: ${colors.PRIMARY};
  margin-bottom: 48px;
  ${media.PHONE} {
    min-height: 193px;
  }
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledIconsItem = styled.a`
  height: 39px;
  width: 39px;
  border: 1px solid ${colors.GRAY};
  margin-right: 6px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s linear;
  path {
    transition: 0.3s linear;
  }
  &:hover {
    border: 1px solid ${colors.RED};
  }
  &:hover path {
    fill: ${colors.RED};
  }
`;

export {
  StyledAddFovorite,
  StyledArrowDown,
  StyledBackButton,
  StyledBookImage,
  StyledBookInfo,
  StyledButtonContainer,
  StyledDetailsBook,
  StyledIcons,
  StyledIconsItem,
  StyledMainCointainer,
  StyledParams,
  StyledPrice,
  StyledTab,
  StyledTabList,
  StyledTabPanel,
  StyledTitle,
};
