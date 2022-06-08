import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import IconSelector from "../IconSelector/IconSelector";
import { routes } from "../../routes/routes";
import {
  StyledAccount,
  StyledAllResultsButton,
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
  StyledSearchResultContainer,
} from "./styles";
import { getFavoriteBooks } from "../../store/selectors/favoriteBooksSelectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getCarts } from "../../store/selectors/cartSelectors";
import { ChangeEvent, useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { ICart, IFavoriteBook } from "../../types/types";
import SearchBook from "../SearchBook/SearchBook";
import { fetchNavSearchBooks } from "../../store/slices/navSearchBooksSlice";
import { getNavSearchBooks } from "../../store/selectors/navSearchBooksSelectors";
interface IData {
  title: string;
}

const NavBar = () => {
  const { register, handleSubmit, reset } = useForm<IData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const page: string = "1";
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);
  const navSearchBooks = useAppSelector(getNavSearchBooks);
  const carts: ICart[] = useAppSelector(getCarts);
  useEffect(() => {
    dispatch(fetchNavSearchBooks({ title, page }));
  }, [title]);
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
    setTitle("");
    reset();
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
            {...register("title", {
              value: title,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value),
            })}
          />
          <StyledSearchButton type="submit">
            <IconSelector id="search" />
          </StyledSearchButton>
          {title && (
            <StyledSearchResult>
              <StyledSearchResultContainer>
                {navSearchBooks.books.map((book) => {
                  return (
                    <div onClick={() => setTitle("")}>
                      <SearchBook key={book.isbn13} book={book} />
                    </div>
                  );
                })}
              </StyledSearchResultContainer>

              <StyledAllResultsButton>all results</StyledAllResultsButton>
            </StyledSearchResult>
          )}
        </form>
      </StyledSearch>
      <StyledContainer>
        <StyledFavorites to={routes.FAVORITES}>
          <IconSelector id="favorites" />
          {favoriteBooks.length ? (
            <StyledFavoriteCircle>
              <IconSelector id="red-circle" />
            </StyledFavoriteCircle>
          ) : (
            <></>
          )}
        </StyledFavorites>
        <StyledCart to={routes.CART}>
          <IconSelector id="cart" />
          {carts.length ? (
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
