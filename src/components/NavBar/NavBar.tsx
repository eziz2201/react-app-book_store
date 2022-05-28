import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IconSelector from "../IconSelector/IconSelector";
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
    navigate(`search/${data.title}/1`);
  };

  return (
    <StyledNavbar>
      <StyledLogo to={routes.HOME}>
        <IconSelector id="logo" />
      </StyledLogo>
      <StyledSearch>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="Search"
            type="text"
            {...register("title")}
          />
          <IconSelector id="search"></IconSelector>
        </form>
      </StyledSearch>
      <StyledContainer>
        <StyledFavorites to={routes.FAVORITES}>
          <IconSelector id="favorites" />
          <IconSelector id="red-circle" />
        </StyledFavorites>
        <StyledCart to={routes.CART}>
          <IconSelector id="cart" />
        </StyledCart>
        <StyledAccount to={routes.ACCOUNT}>
          <IconSelector id="account" />
        </StyledAccount>
        <StyledBurgerMenu>
          <IconSelector id="burger-menu" />
        </StyledBurgerMenu>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
