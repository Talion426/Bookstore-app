import { CartItem } from "components";
import { StyledCartList } from "./styles";

export const CartList = () => {
  return (
    <StyledCartList>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </StyledCartList>
  );
};
