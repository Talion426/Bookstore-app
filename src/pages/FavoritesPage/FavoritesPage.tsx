import { BackArrowButton, FavoriteItem, Title } from "components";
import { deleteFavorite, getFavoriteBooks, useAppDispatch, useAppSelector } from "store";
import { StyledFavoritesPage, FavoriteList } from "./styles";

export const FavoritesPage = () => {
  const { favorite } = useAppSelector(getFavoriteBooks);
  const dispatch = useAppDispatch();

  return (
    <StyledFavoritesPage>
      <BackArrowButton />
      <Title text="Favorites" />
      <FavoriteList>
        {favorite.map((book) => {
          return (
            <FavoriteItem
              key={book.isbn13}
              book={book}
              deleteFavoriteBook={() => dispatch(deleteFavorite(book.isbn13))}
            />
          );
        })}
      </FavoriteList>
    </StyledFavoritesPage>
  );
};
