import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SvgSelectors from "../../assets/SvgSelectors";
import { routes } from "../../routes/routes";
import {
  StyledAccount,
  StyledBurgerMenu,
  StyledCart,
  StyledContainer,
  StyledFavorites,
  StyledInput,
  StyledLogo,
  StyledNavbar,
  StyledSearch,
} from "./styles";

const NavBar = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    navigate(`search/${data.title}/1`)
  };

  return (
    <StyledNavbar>
      <StyledLogo to={routes.HOME}>
        <SvgSelectors id="logo" />
      </StyledLogo>
      <StyledSearch>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="Search"
            type="text"
            {...register("title")}
          />
          <SvgSelectors id="search"></SvgSelectors>
        </form>
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
          <SvgSelectors id="burger-menu" />
        </StyledBurgerMenu>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
