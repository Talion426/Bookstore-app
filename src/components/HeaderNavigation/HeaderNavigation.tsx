import { HeartIcon, ShoppingBagIcon, AccountIcon } from "assets";
import { NavItem, ShoppingBagNavItem, StyledNav, Text } from "./styles";
import { ROUTE } from "router";
import { useWindowSize } from "hooks";

export const HeaderNavigation = () => {
  const { width = 0 } = useWindowSize();
  const isMobile = width > 992;

  return (
    <StyledNav>
      <NavItem to={ROUTE.FAVORITES}>{isMobile ? <HeartIcon /> : <Text>Favorites</Text>}</NavItem>
      <ShoppingBagNavItem to={ROUTE.CART}>
        {isMobile ? <ShoppingBagIcon /> : <Text>Cart</Text>}
      </ShoppingBagNavItem>
      <NavItem to={ROUTE.ACCOUNT}>{isMobile ? <AccountIcon /> : <Text>Account</Text>}</NavItem>
    </StyledNav>
  );
};
