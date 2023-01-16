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

  const totalVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <StyledCartTotalPrice
      variants={totalVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
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
