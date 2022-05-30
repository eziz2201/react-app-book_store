import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledNavbar = styled.nav`
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  border-bottom: 1px solid ${colors.GRAY};
  ${media.TABLET} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const StyledLogo = styled(NavLink)``;
export const StyledSearch = styled.div`
  position: relative;
  max-width: 542px;
  width: 100%;
  justify-self: center;
  svg {
    display: block;
    position: absolute;
    top: 18px;
    right: 18px;
  }
  ${media.TABLET} {
    display: none;
  }
`;

export const StyledFavorites = styled(NavLink)`
  position: relative;
  ${media.TABLET} {
    display: none;
  }
`;
export const StyledFavoriteCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
  ${media.TABLET} {
    display: none;
  }
`;
export const StyledCart = styled(NavLink)`
  position: relative;
`;
export const StyledAccount = styled(NavLink)`
  ${media.TABLET} {
    display: none;
  }
`;

export const StyledCartCircle = styled.div`
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
  ${media.TABLET} {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 46px;
  justify-content: center;
  align-items: center;
  padding: 19px;
  justify-self: end;
  ${media.TABLET} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 46px;
  }
`;

export const StyledBurgerMenu = styled.div`
  display: none;
  ${media.TABLET} {
    display: block;
  }
`;

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
