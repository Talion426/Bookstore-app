import { HeartIcon, ShoppingBagIcon, AccountIcon } from "assets";
import { NavItem, ShoppingBagNavItem, StyledNav } from "./styles";
import { ROUTE } from "router";

export const HeaderNavigation = () => {
  return (
    <StyledNav>
      <NavItem to={ROUTE.FAVORITES}>
        <HeartIcon />
      </NavItem>
      <ShoppingBagNavItem to={ROUTE.CART}>
        <ShoppingBagIcon />
      </ShoppingBagNavItem>
      <NavItem to={ROUTE.ACCOUNT}>
        <AccountIcon />
      </NavItem>
    </StyledNav>
  );
};
