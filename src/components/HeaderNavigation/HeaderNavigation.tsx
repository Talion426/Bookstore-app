import { HeartIcon, ShoppingBagIcon, AccountIcon, BurgerMenuIcon } from "assets";
import { NavItem, ShoppingBagNavItem, StyledNav, BurgerMenuNavItem } from "./styles";
import { Color } from "ui";
import { useToggle } from "hooks";

export const HeaderNavigation = () => {
  const [isOpen, toggleOpen] = useToggle();
  const handleMenu = () => {
    toggleOpen();
  };

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
      <BurgerMenuNavItem type="button" onClick={handleMenu}>
        <BurgerMenuIcon fill={Color.Primary} />
      </BurgerMenuNavItem>
    </StyledNav>
  );
};
