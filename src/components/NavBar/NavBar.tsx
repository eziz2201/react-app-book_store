import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IconSelector from "../IconSelector/IconSelector";
import { routes } from "../../routes/routes";
import {
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
} from "./styles";
import { getFavoriteBooks } from "../../store/selectors/favoriteBooksSelectors";
import { useAppSelector } from "../../store/hooks/hooks";
import { ICart, IFavoriteBook } from "../../store/slices/types";
import { getCarts } from "../../store/selectors/cartSelectors";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
interface IData {
  title: string;
}

const NavBar = () => {
  const { register, handleSubmit } = useForm<IData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);
  const carts: ICart[] = useAppSelector(getCarts);
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
  };
  const handleBurgerClose = () => {
    setIsOpen(false);
  };
  const handleBurgerOpen = () => {
    setIsOpen(true);
  };
  return (
    <StyledNavbar>
      <BurgerMenu handleBurgerClose={handleBurgerClose} isOpen={isOpen} />
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
            <StyledFavoriteCircle>
              <IconSelector id="red-circle" />
            </StyledFavoriteCircle>
          ) : (
            <></>
          )}
        </StyledFavorites>
        <StyledCart to={routes.CART}>
          <IconSelector id="cart" />
          {carts.length != 0 ? (
            <StyledCartCircle>
              <IconSelector id="red-circle" />
            </StyledCartCircle>
          ) : (
            <></>
          )}
        </StyledCart>
        <StyledAccount to={routes.ACCOUNT}>
          <IconSelector id="account" />
        </StyledAccount>
        <StyledBurgerOpen onClick={handleBurgerOpen}>
          <IconSelector id="burger-open" />
        </StyledBurgerOpen>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
