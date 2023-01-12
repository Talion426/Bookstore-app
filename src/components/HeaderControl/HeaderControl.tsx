import { SearchIcon } from "assets";
import { Button, HeaderNavigation, SearchModal, ThemeChanger } from "components";
import { useDebounce, useInput, useToggle, useWindowSize } from "hooks";
import { useEffect } from "react";
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
  const { isAuth } = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const { value, onChange } = useInput();
  const navigate = useNavigate();
  const { width = 0 } = useWindowSize();

  const handleSearch = () => {
    navigate(`search/${value}/1`);
  };

  const debounceSearch = useDebounce(value, 300);
  const [isOpenSearch, toggleSearch] = useToggle();

  useEffect(() => (debounceSearch ? toggleSearch() : console.log(1)), [debounceSearch]);

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

      {isOpenSearch && <SearchModal value={value} />}
    </StyledHeaderControl>
  );
};
