import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../ui/colors";

export const StyledNavbar = styled.nav`
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  border-bottom: 1px solid ${colors.GRAY};
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
`;

export const StyledFavorites = styled(NavLink)`
  position: relative;
  svg:last-child {
    position: absolute;
    top: -2px;
    right: -2px;
  }
`;
export const StyledCart = styled(NavLink)``;
export const StyledAccount = styled(NavLink)``;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 46px;
  padding: 19px;
  justify-self: end;
`;
