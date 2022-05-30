import { useNavigate } from "react-router-dom";
import CartBook from "../../components/CartBook/CartBook";

import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppSelector } from "../../store/hooks/hooks";
import {
  getCarts,
  getSumTotalCarts,
  getTotalCarts,
  getVatCarts,
} from "../../store/selectors/cartSelectors";

import {
  StyledBackButton,
  StyledCart,
  StyledText,
  StyledTitle,
} from "./styles";

const Cart = () => {
  const carts = useAppSelector(getCarts);
  const sumTotal = useAppSelector(getSumTotalCarts);
  const vat = useAppSelector(getVatCarts);
  const total = useAppSelector(getTotalCarts);
  const navigate = useNavigate();
  

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <StyledCart>
      <StyledBackButton onClick={handleBack}>
        <IconSelector id="back" />
      </StyledBackButton>
      <StyledTitle>CART</StyledTitle>
      {carts.length === 0 ? (
        <StyledText>Your cart is empty!</StyledText>
      ) : (
        carts.map((book) => <CartBook key={book.isbn13} book={book} />)
      )}
      <p>sumTotal: {sumTotal}</p>
      <p>vat: {vat}</p>
      <p>totalPrice: {total}</p>
      
    </StyledCart>
  );
};

export default Cart;
