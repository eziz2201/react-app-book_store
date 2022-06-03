import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartBook from "../../components/CartBook/CartBook";

import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getCarts,
  getSumTotalCarts,
  getTotalCarts,
  getVatCarts,
} from "../../store/selectors/cartSelectors";
import { removeAllCart } from "../../store/slices/cartSlice";

import {
  StyledBackButton,
  StyledCart,
  StyledCheckButton,
  StyledCheckItem,
  StyledCheckList,
  StyledCheckTotal,
  StyledText,
  StyledTitle,
} from "./styles";

const Cart = () => {
  const carts = useAppSelector(getCarts);
  const sumTotal = useAppSelector(getSumTotalCarts);
  const vat = useAppSelector(getVatCarts);
  const total = useAppSelector(getTotalCarts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(-1);
  };
  const handleCheckOut = () => {
    dispatch(removeAllCart());
  };
  return (
    <StyledCart>
      <StyledBackButton onClick={handleBack}>
        <IconSelector id="back" />
      </StyledBackButton>
      <StyledTitle>YOUR CART</StyledTitle>
      {carts.length === 0 ? (
        <StyledText>Your cart is empty!</StyledText>
      ) : (
        carts.map((book) => <CartBook key={book.isbn13} book={book} />)
      )}
      <StyledCheckList>
        <StyledCheckItem>
          Sum total<span>$ {sumTotal}</span>
        </StyledCheckItem>
        <StyledCheckItem>
          VAT<span>$ {vat}</span>
        </StyledCheckItem>
        <StyledCheckTotal>
          Total:<span>${total}</span>
        </StyledCheckTotal>
        <StyledCheckButton onClick={handleCheckOut}>
          <Button text="check out" />
        </StyledCheckButton>
      </StyledCheckList>
    </StyledCart>
  );
};

export default Cart;
