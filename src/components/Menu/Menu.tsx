import { Search } from "../Search/Search";
import { useInput } from "../../hooks";
import { MenuBody, Button, Link, StyledMenu } from "./styles";

export const Menu = () => {
  const search = useInput();

  return (
    <StyledMenu>
      <MenuBody>
        <Search {...search} type="search" placeholder="Search" />
        <Link href="#">Favorites</Link>
        <Link href="#">Cart</Link>
      </MenuBody>
      <Button type="button">Sign in</Button>
    </StyledMenu>
  );
};
