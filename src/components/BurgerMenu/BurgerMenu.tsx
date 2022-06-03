import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CancelButton from "../CancelButton/CancelButton";
import IconSelector from "../IconSelector/IconSelector";
import { StyledInput } from "../NavBar/styles";
import {
  StyledBurgerButton,
  StyledBurgerClose,
  StyledBurgerCloseContainer,
  StyledBurgerMenu,
  StyledBurgerMenuContainer,
  StyledBurgerMenuNav,
  StyledBurgerSearch,
  StyledBurgerTitle,
} from "./styles";
interface IData {
  title: string;
}
interface IBurgerMenu {
  handleBurgerClose: () => void;
  isOpen: boolean;
}
const BurgerMenu = ({ handleBurgerClose, isOpen }: IBurgerMenu) => {
  const { register, handleSubmit } = useForm<IData>();
  const navigate = useNavigate();
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
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
          <StyledBurgerTitle>FAVORITES</StyledBurgerTitle>
          <StyledBurgerTitle>CART</StyledBurgerTitle>
          <StyledBurgerButton>
            <Button text="LOG OUT" />
          </StyledBurgerButton>
        </StyledBurgerMenuNav>
      </StyledBurgerMenuContainer>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
