import { HeartIcon, ShoppingBagIcon, AccountIcon, BurgerMenuIcon } from "../../assets";
import { NavItem, ShoppingBagNavItem, StyledNav, BurgerMenuNavItem } from "./styles";
import { Color } from "../../ui";

export const HeaderNavigation = () => {
  return (
    <StyledNav>
      <NavItem href="/">
        <HeartIcon />
      </NavItem>
      <ShoppingBagNavItem href="/">
        <ShoppingBagIcon />
      </ShoppingBagNavItem>
      <NavItem href="/">
        <AccountIcon />
      </NavItem>
      <BurgerMenuNavItem>
        <BurgerMenuIcon fill={Color.Primary} />
      </BurgerMenuNavItem>
    </StyledNav>
  );
};
