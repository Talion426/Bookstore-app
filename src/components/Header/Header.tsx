import { HeaderControl } from "components";
import { BurgerMenuIcon, CancelIcon, LogoIcon } from "assets";
import { useToggle, useWindowSize } from "hooks";
import { BurgerMenuNavItem, LogoWrapper, StyledHeader } from "./styles";
import { ROUTE } from "router";
import { Color } from "ui";
import { useEffect } from "react";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleNav] = useToggle();

  useEffect(() => {
    document.documentElement.setAttribute("overflow", String(isOpen));
  }, [isOpen]);

  const ToggleIsOpen = () => {
    return isOpen && toggleNav();
  };

  return (
    <StyledHeader initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <LogoWrapper to={ROUTE.HOME} onClick={ToggleIsOpen}>
        <LogoIcon />
      </LogoWrapper>
      <HeaderControl isOpen={isOpen} closeBurger={ToggleIsOpen} />
      {width < 993 && (
        <BurgerMenuNavItem type="button" onClick={toggleNav}>
          {isOpen ? <CancelIcon fill={Color.Primary} /> : <BurgerMenuIcon fill={Color.Primary} />}
        </BurgerMenuNavItem>
      )}
    </StyledHeader>
  );
};
