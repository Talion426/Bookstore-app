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

  const vat = totalPrice * 0.26;
  const totalPriceWithVat = +totalPrice + +vat;

  return (
    <StyledCartTotalPrice>
      <PriceWrapper>
        <PriceTitle>Sum total:</PriceTitle>
        <Price>$ {totalPrice.toFixed(2)}</Price>
      </PriceWrapper>
      <PriceWrapper>
        <PriceTitle>VAT:</PriceTitle>
        <Price>$ {vat.toFixed(2)}</Price>
      </PriceWrapper>
      <PriceWrapper>
        <TotalTitle>TOTAL:</TotalTitle>
        <TotalTitle>${totalPriceWithVat.toFixed(2)}</TotalTitle>
      </PriceWrapper>

      <Button type="button">Check out</Button>
    </StyledCartTotalPrice>
  );
};
