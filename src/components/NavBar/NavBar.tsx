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
  StyledRedCircle,
  StyledSearch,
} from "./styles";
import { getFavoriteBooks } from "../../store/selectors/favoriteBooksSelectors";
import { useAppSelector } from "../../store/hooks/hooks";
import { IFavoriteBook } from "../../store/slices/types";
interface IData {
  title: string;
}

const NavBar = () => {
  const { register, handleSubmit } = useForm<IData>();
  const navigate = useNavigate();
  const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);
  const onSubmit = (data: IData) => {
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
          <IconSelector id="search" />
        </form>
      </StyledSearch>
      <StyledContainer>
        <StyledFavorites to={routes.FAVORITES}>
          <IconSelector id="favorites" />
          {favoriteBooks.length != 0 ? (
            <StyledRedCircle>
              <IconSelector id="red-circle" />
            </StyledRedCircle>
          ) : (
            <></>
          )}
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
