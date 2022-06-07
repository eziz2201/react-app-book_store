import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { unsetUser } from "../../store/slices/userSlice";
import Button from "../Button/Button";
import CancelButton from "../CancelButton/CancelButton";
import IconSelector from "../IconSelector/IconSelector";
import { StyledInput } from "../NavBar/styles";
import {
  StyledBurgerButton,
  StyledBurgerClose,
  StyledBurgerCloseContainer,
  StyledBurgerLink,
  StyledBurgerMenu,
  StyledBurgerMenuContainer,
  StyledBurgerMenuNav,
  StyledBurgerSearch,
} from "./styles";
interface IData {
  title: string;
}
interface IBurgerMenu {
  handleBurgerClose: () => void;
  isOpen: boolean;
}
const BurgerMenu = ({ handleBurgerClose, isOpen }: IBurgerMenu) => {
  const { isAuth } = useAppSelector(getUser);
  const { register, handleSubmit } = useForm<IData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
  };
  const handleAuth = () => {
    if (isAuth) {
      dispatch(unsetUser());
    } else {
      navigate(`/${routes.SIGN_IN}`);
    }
  };
  return (
    <StyledBurgerMenu open={isOpen}>
      <StyledBurgerMenuContainer>
        <StyledBurgerMenuNav>
          <StyledBurgerCloseContainer>
            <StyledBurgerClose onClick={handleBurgerClose}>
              <CancelButton />
            </StyledBurgerClose>
          </StyledBurgerCloseContainer>
          <StyledBurgerSearch>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledInput
                placeholder="Search"
                type="text"
                {...register("title")}
              />
              <IconSelector id="search" />
            </form>
          </StyledBurgerSearch>
          {isAuth && (
            <StyledBurgerLink to={`/${routes.FAVORITES}`}>
              FAVORITES
            </StyledBurgerLink>
          )}
          {isAuth && (
            <StyledBurgerLink to={`/${routes.CART}`}>CART</StyledBurgerLink>
          )}

          <StyledBurgerButton onClick={handleAuth}>
            <Button text={isAuth ? "LOG OUT" : "SIGN IN"} />
          </StyledBurgerButton>
        </StyledBurgerMenuNav>
      </StyledBurgerMenuContainer>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
