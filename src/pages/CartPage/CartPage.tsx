import { BackArrowButton, CartItem, Title, CartTotalPrice } from "components";
import {
  decAmount,
  deleteBook,
  getCartBooks,
  incAmount,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledCartPage, CartList } from "./styles";

export const CartPage = () => {
  const { cart } = useAppSelector(getCartBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledCartPage>
      <BackArrowButton />
      <Title text="Your Cart" />
      <CartList>
        {cart.map((book) => {
          return (
            <CartItem
              key={book.isbn13}
              book={book}
              incAmount={() => dispatch(incAmount(book.isbn13))}
              decAmount={() => dispatch(decAmount(book.isbn13))}
              deleteBook={() => {
                dispatch(deleteBook(book));
              }}
            />
          );
        })}
      </CartList>
      {cart.length > 0 && <CartTotalPrice />}
    </StyledCartPage>
  );
};
