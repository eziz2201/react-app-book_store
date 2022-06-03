import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { removeCart, updateQuantity } from "../../store/slices/cartSlice";
import { ICart } from "../../types/types";
import CancelButton from "../CancelButton/CancelButton";
import IconSelector from "../IconSelector/IconSelector";
import {
  StyledBookInfo,
  StyledCartBook,
  StyledImage,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledRemoveCartButton,
  StyledButton,
  StyledQuantity,
} from "./styles";

interface ICartBook {
  book: ICart;
}

const CartBook = ({ book }: ICartBook) => {
  const [quantity, setQuantity] = useState(book.quantity);
  const dispatch = useAppDispatch();
  const increaseQuantity = (n = 1) => {
    const value = Number(quantity) + n;
    const isbn13 = book.isbn13;
    if (Number.isInteger(value) && value >= 1) {
      setQuantity(value);
      const payload = { isbn13, value };
      dispatch(updateQuantity(payload));
    }
  };
  const handleMinus = () => {
    increaseQuantity(-1);
  };

  const handlePlus = () => {
    increaseQuantity(+1);
  };

  const handleRemoveCart = () => {
    dispatch(removeCart(book));
  };
  return (
    <StyledCartBook>
      <StyledImage>
        <img src={book.image} alt={book.image} />
      </StyledImage>
      <StyledBookInfo>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledText>
          by {book.authors}, {book.year}
        </StyledText>
        <StyledText>{book.isbn13}</StyledText>
        <StyledQuantity>
          <StyledButton onClick={handleMinus}>
            <IconSelector id="minus" />
          </StyledButton>
          {quantity}
          <StyledButton onClick={handlePlus}>
            <IconSelector id="plus" />
          </StyledButton>
        </StyledQuantity>
      </StyledBookInfo>
      <StyledPrice>${book.totalPrice}</StyledPrice>
      <StyledRemoveCartButton onClick={handleRemoveCart}>
        <CancelButton />
      </StyledRemoveCartButton>
    </StyledCartBook>
  );
};

export default CartBook;
