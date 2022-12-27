import { BackArrowButton, CartList, Title } from "components";
import { StyledCartPage } from "./styles";

export const CartPage = () => {
  return (
    <StyledCartPage>
      <BackArrowButton />
      <Title text="Your Cart" />
      <CartList />
    </StyledCartPage>
  );
};
