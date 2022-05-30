import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartBook from "../../components/CartBook/CartBook";
import FavoriteBook from "../../components/FavoriteBook/FavoriteBook";
import IconSelector from "../../components/IconSelector/IconSelector";
import { useAppSelector } from "../../store/hooks/hooks";
import { getCarts } from "../../store/selectors/cartSelectors";
import { ICart } from "../../store/slices/types";
import {
  StyledBackButton,
  StyledCart,
  StyledText,
  StyledTitle,
} from "./styles";

const Cart = () => {
  const carts: ICart[] = useAppSelector(getCarts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = carts.reduce(
    (total, { totalPrice }) => total + Number(totalPrice),
    0
  );

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
      <p>totalPrice: {totalPrice}</p>
    </StyledCart>
    // <div>{carts.map((book) => (
    //   <ul key={book.isbn13} >
    //     <li>{book.title}</li>
    //     <li>{book.price}</li>
    //     <li><button>-</button>{}<button>+</button></li>
    //   </ul>
    // ))}
    // <h2>totalPrice:  ${totalPrice}</h2>
    // </div>
  );
};

export default Cart;
