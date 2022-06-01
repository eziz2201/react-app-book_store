import styled from "styled-components";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

interface IOpen {
  open: boolean;
}

const StyledBurgerMenu = styled.div<IOpen>`
  display: none;
  ${media.TABLET} {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    max-width: 100vw;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    background: rgba(49, 48, 55, 0.5);
  }
`;

const StyledBurgerMenuContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
`;

const StyledBurgerMenuNav = styled.div`
  width: 368px;
  height: 100%;
  margin-left: auto;
  padding: 0 40px;
  background-color: ${colors.WHITE};
`;

const StyledBurgerCloseContainer = styled.div`
  margin: 0 auto;
  height: 104px;
  width: 288px;
  border-bottom: 1px solid ${colors.GRAY};
  margin-bottom: 56px;
`;

const StyledBurgerClose = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const StyledBurgerSearch = styled.div`
  position: relative;
  margin-bottom: 50px;
  svg {
    position: absolute;
    right: 16px;
    top: 16px;
  }
`;

const StyledBurgerTitle = styled.h1`
  display: block;
  &:first-of-type {
    margin-bottom: 55px;
  }
  ${typography.BURGER_MENU};
  text-align: center;
`;

const StyledBurgerButton = styled.div`
  width: 288px;
  margin-top: 100px;
`;

export {
  StyledBurgerButton,
  StyledBurgerClose,
  StyledBurgerCloseContainer,
  StyledBurgerMenu,
  StyledBurgerMenuContainer,
  StyledBurgerMenuNav,
  StyledBurgerSearch,
  StyledBurgerTitle,
};
