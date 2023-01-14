import { Button, HeaderNavigation, Search, ThemeChanger } from "components";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { getUser, removeUser, useAppDispatch, useAppSelector } from "store";
import { StyledHeaderControl, ButtonWrapper, LinkButton } from "./styles";

interface IProps {
  isOpen: boolean;
  closeBurger: () => void;
}

export const HeaderControl = ({ isOpen, closeBurger }: IProps) => {
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const { width = 0 } = useWindowSize();

  return (
    <StyledHeaderControl isOpen={isOpen}>
      <Search closeBurger={closeBurger} />
      <ThemeChanger type="checkbox" />
      {!isAuth && width > 992 && <LinkButton to={ROUTE.SIGN}>Sign In</LinkButton>}
      {isAuth && <HeaderNavigation closeBurger={closeBurger} />}
      {width < 993 && (
        <>
          <ButtonWrapper />
          {isAuth ? (
            <Button
              type="button"
              onClick={() => {
                dispatch(removeUser());
                closeBurger();
              }}
            >
              Log out
            </Button>
          ) : (
            <LinkButton to={ROUTE.SIGN} onClick={closeBurger}>
              Sign In
            </LinkButton>
          )}
        </>
      )}
    </StyledHeaderControl>
  );
};
