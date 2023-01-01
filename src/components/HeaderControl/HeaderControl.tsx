import { Button, HeaderNavigation, Search, ThemeChanger } from "components";
import { useInput, useWindowSize } from "hooks";
import { StyledHeaderControl } from "./styles";

interface IProps {
  isOpen: boolean;
}

export const HeaderControl = ({ isOpen }: IProps) => {
  const { width = 0 } = useWindowSize();
  const search = useInput();

  return (
    <StyledHeaderControl isOpen={isOpen}>
      <Search {...search} type="search" placeholder="Search" />
      <ThemeChanger type="checkbox" />
      <HeaderNavigation />
      {width < 993 && <Button type="button">Log out</Button>}
    </StyledHeaderControl>
  );
};
