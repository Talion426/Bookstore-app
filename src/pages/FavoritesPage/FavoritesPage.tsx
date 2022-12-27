import { BackArrowButton, Title, FavoriteList } from "components";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <BackArrowButton />
      <Title text="Favorites" />
      <FavoriteList />
    </StyledFavoritesPage>
  );
};
