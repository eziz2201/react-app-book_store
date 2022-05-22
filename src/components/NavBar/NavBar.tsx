import SvgSelectors from "../../assets/SvgSelectors";
import { routes } from "../../routes/routes";
import Input from "../Input/Input";
import {
  StyledAccount,
  StyledBurgerMenu,
  StyledCart,
  StyledContainer,
  StyledFavorites,
  StyledLogo,
  StyledNavbar,
  StyledSearch,
} from "./styles";

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledLogo to={routes.HOME}>
        <SvgSelectors id="logo" />
      </StyledLogo>
      <StyledSearch>
        <Input placeholder="Search" />
        <SvgSelectors id="search"></SvgSelectors>
      </StyledSearch>
      <StyledContainer>
        <StyledFavorites to={routes.FAVORITES}>
          <SvgSelectors id="favorites" />
          <SvgSelectors id="red-circle" />
        </StyledFavorites>
        <StyledCart to={routes.CART}>
          <SvgSelectors id="cart" />
        </StyledCart>
        <StyledAccount to={routes.ACCOUNT}>
          <SvgSelectors id="account" />
        </StyledAccount>
        <StyledBurgerMenu>
          <SvgSelectors id='burger-menu'/>
        </StyledBurgerMenu>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
