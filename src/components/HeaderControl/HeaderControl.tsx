import { Button, HeaderNavigation, Search, ThemeChanger } from "components";
import { useInput, useWindowSize } from "hooks";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";
import { StyledHeaderControl, ButtonWrapper, LinkButton } from "./styles";

interface IProps {
  isOpen: boolean;
}

export const HeaderControl = ({ isOpen }: IProps) => {
  const { width = 0 } = useWindowSize();
  const search = useInput();
  const { isAuth } = useAppSelector(getUser);

  return (
    <StyledHeaderControl isOpen={isOpen}>
      <Search {...search} type="search" placeholder="Search" />
      <ThemeChanger type="checkbox" />
      {!isAuth && width > 992 && <LinkButton to={ROUTE.SIGN}>Sign In</LinkButton>}
      {isAuth && <HeaderNavigation />}
      {width < 993 && (
        <>
          <ButtonWrapper />
          {isAuth ? (
            <Button type="button">Log out</Button>
          ) : (
            <LinkButton to={ROUTE.SIGN}>Sign In</LinkButton>
          )}
        </>
      )}
    </StyledHeaderControl>
  );
};
