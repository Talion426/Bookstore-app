import { SearchIcon } from "assets";
import { Button, HeaderNavigation, ThemeChanger } from "components";
import { useInput, useWindowSize } from "hooks";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUser, removeUser, useAppDispatch, useAppSelector } from "store";
import {
  StyledHeaderControl,
  ButtonWrapper,
  LinkButton,
  SearchWrapper,
  Search,
  SearchButton,
} from "./styles";

interface IProps {
  isOpen: boolean;
  closeBurger: () => void;
}

export const HeaderControl = ({ isOpen, closeBurger }: IProps) => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(getUser);
  const { value, onChange } = useInput();
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`search/${value}/1`);
  };

  return (
    <StyledHeaderControl isOpen={isOpen}>
      <SearchWrapper>
        <Search value={value} placeholder="Search" onChange={onChange} />
        <SearchButton
          onClick={() => {
            handleSearch();
            closeBurger();
          }}
        >
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
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
