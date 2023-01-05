import { HeartIcon, ShoppingBagIcon, AccountIcon } from "assets";
import { NavItem, ShoppingBagNavItem, StyledNav, Text, Amount, IconContainer } from "./styles";
import { ROUTE } from "router";
import { useWindowSize } from "hooks";
import { getCartBooks, getFavoriteBooks, useAppSelector } from "store";

export const HeaderNavigation = () => {
  const { width = 0 } = useWindowSize();
  const isMobile = width > 992;

  const { favorite } = useAppSelector(getFavoriteBooks);
  const { cart } = useAppSelector(getCartBooks);

  const favoriteLength = favorite.length;
  const cartLength = cart.length;

  return (
    <StyledNav>
      <NavItem to={ROUTE.FAVORITES}>
        {isMobile ? (
          <IconContainer>
            <HeartIcon />
            {favoriteLength > 0 && <Amount>{favoriteLength}</Amount>}
          </IconContainer>
        ) : (
          <Text>Favorites</Text>
        )}
      </NavItem>
      <ShoppingBagNavItem to={ROUTE.CART}>
        {isMobile ? (
          <IconContainer>
            <ShoppingBagIcon />
            {cartLength > 0 && <Amount>{cartLength}</Amount>}
          </IconContainer>
        ) : (
          <Text>Cart</Text>
        )}
      </ShoppingBagNavItem>
      <NavItem to={ROUTE.ACCOUNT}>{isMobile ? <AccountIcon /> : <Text>Account</Text>}</NavItem>
    </StyledNav>
  );
};
