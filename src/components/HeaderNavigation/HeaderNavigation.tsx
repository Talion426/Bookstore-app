import { HeartIcon, ShoppingBagIcon, AccountIcon, BurgerMenuIcon } from "assets";
import { NavItem, ShoppingBagNavItem, StyledNav, BurgerMenuNavItem } from "./styles";
import { Color } from "ui";
import { useToggle } from "hooks";
import { ROUTE } from "router";

export const HeaderNavigation = () => {
  const [isOpen, toggleOpen] = useToggle();
  const handleMenu = () => {
    toggleOpen();
  };

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
      <BurgerMenuNavItem type="button" onClick={handleMenu}>
        <BurgerMenuIcon fill={Color.Primary} />
      </BurgerMenuNavItem>
    </StyledNav>
  );
};
