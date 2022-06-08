import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const StyledNavbar = styled.nav`
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  border-bottom: 1px solid ${colors.GRAY};
  ${media.TABLET} {
    grid-template-columns: 1fr 1fr;
  }
`;
const StyledLogo = styled(NavLink)``;
const StyledSearchButton = styled.button`
  background-color: ${colors.WHITE};
`;
const StyledSearch = styled.div`
  position: relative;
  max-width: 542px;
  width: 100%;
  justify-self: center;
  svg {
    display: block;
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    path:first-of-type {
      transition: all 0.3s;
      fill: ${colors.SECONDARY};
    }
    :hover path:first-of-type {
      fill: ${colors.RED};
    }
    :active path:first-of-type {
      fill: ${colors.PRIMARY};
    }
  }
  ${media.TABLET} {
    display: none;
  }
`;

const StyledSearchResult = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  background-color: ${colors.WHITE};
  z-index: 2;
  ${media.TABLET} {
    display: none;
  }
`;
const StyledSearchResultContainer = styled.div`
  max-height: 420px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
const StyledAllResultsButton = styled.button`
  width: 100%;
  padding: 17px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.GRAY};
  ${typography.TAB};
  text-align: center;
  color: ${colors.SECONDARY};
  transition: all 0.5s;
  :hover {
    color: ${colors.PRIMARY};
    border: 1px solid ${colors.PRIMARY};
  }
`;

const StyledFavorites = styled(NavLink)`
  position: relative;
  ${media.TABLET} {
    display: none;
  }
`;
const StyledFavoriteCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
  ${media.TABLET} {
    display: none;
  }
`;
const StyledCart = styled(NavLink)`
  position: relative;
  ${media.TABLET} {
    display: none;
  }
`;
const StyledAccount = styled(NavLink)`
  ${media.TABLET} {
    display: none;
  }
`;

const StyledCartCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 46px;
  justify-content: center;
  align-items: center;
  padding: 19px;
  justify-self: end;
  ${media.TABLET} {
    grid-template-columns: 1fr;
    grid-gap: 46px;
  }
`;

const StyledBurgerOpen = styled.div`
  display: none;
  ${media.TABLET} {
    display: block;
  }
`;

const StyledInput = styled.input`
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

export {
  StyledAccount,
  StyledBurgerOpen,
  StyledCart,
  StyledCartCircle,
  StyledContainer,
  StyledFavoriteCircle,
  StyledFavorites,
  StyledInput,
  StyledLogo,
  StyledNavbar,
  StyledSearch,
  StyledSearchButton,
  StyledSearchResult,
  StyledAllResultsButton,
  StyledSearchResultContainer,
};
