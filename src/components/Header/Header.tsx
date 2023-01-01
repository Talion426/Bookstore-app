import { HeaderControl } from "components";
import { BurgerMenuIcon, CancelIcon, LogoIcon } from "assets";
import { useToggle, useWindowSize } from "hooks";
import { BurgerMenuNavItem, LogoWrapper, StyledHeader } from "./styles";
import { ROUTE } from "router";
import { Color } from "ui";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const [isOpen, toggleNav] = useToggle();

  return (
    <StyledHeader>
      <LogoWrapper to={ROUTE.HOME}>
        <LogoIcon />
      </LogoWrapper>
      <HeaderControl isOpen={isOpen} />
      {width < 993 && (
        <BurgerMenuNavItem type="button" onClick={toggleNav}>
          {isOpen ? <CancelIcon fill={Color.Primary} /> : <BurgerMenuIcon fill={Color.Primary} />}
        </BurgerMenuNavItem>
      )}
    </StyledHeader>
  );
};
