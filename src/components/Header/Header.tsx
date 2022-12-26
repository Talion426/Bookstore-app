import { HeaderNavigation, Search, ThemeChanger } from "components";
import { BurgerMenuIcon, LogoIcon } from "assets";
import { useInput } from "hooks";
import { BurgerMenuNavItem, LogoWrapper, SearchWrapper, StyledHeader } from "./styles";
import { ROUTE } from "router";
import { Color } from "ui";

export const Header = () => {
  const search = useInput();

  return (
    <StyledHeader>
      <LogoWrapper to={ROUTE.HOME}>
        <LogoIcon />
      </LogoWrapper>
      <SearchWrapper>
        <Search {...search} type="search" placeholder="Search" />
      </SearchWrapper>
      <HeaderNavigation />
      <ThemeChanger type="checkbox" />
      <BurgerMenuNavItem type="button">
        <BurgerMenuIcon fill={Color.Primary} />
      </BurgerMenuNavItem>
    </StyledHeader>
  );
};
