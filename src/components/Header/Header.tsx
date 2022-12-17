import { HeaderNavigation, Search, ThemeChanger } from "components";
import { LogoIcon } from "assets";
import { useInput } from "hooks";
import { LogoWrapper, SearchWrapper, StyledHeader } from "./styles";
import { ROUTE } from "router";

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
    </StyledHeader>
  );
};
