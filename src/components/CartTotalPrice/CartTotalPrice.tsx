import { Button } from "components";
import { useEffect } from "react";
import { getBooksTotalPrice, getCartBooks, useAppDispatch, useAppSelector } from "store";
import { StyledCartTotalPrice, PriceWrapper, PriceTitle, Price, TotalTitle } from "./styles";

export const CartTotalPrice = () => {
  const { cart, totalPrice } = useAppSelector(getCartBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksTotalPrice());
  }, [cart, dispatch]);

  const fixedTotalPrice = totalPrice.toFixed(2);
  const vat = (totalPrice * 0.26).toFixed(2);
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  return (
    <StyledCartTotalPrice>
      <PriceWrapper>
        <PriceTitle>Sum total:</PriceTitle>
        <Price>$ {fixedTotalPrice}</Price>
      </PriceWrapper>
      <PriceWrapper>
        <PriceTitle>VAT:</PriceTitle>
        <Price>$ {vat}</Price>
      </PriceWrapper>
      <PriceWrapper>
        <TotalTitle>TOTAL:</TotalTitle>
        <TotalTitle>${totalPriceWithVat}</TotalTitle>
      </PriceWrapper>

      <Button type="button">Check out</Button>
    </StyledCartTotalPrice>
  );
};
