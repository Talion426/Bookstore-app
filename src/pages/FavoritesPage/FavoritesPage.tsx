import { BackArrowButton, DetailsSlider, FavoriteItem, Title } from "components";
import { useEffect } from "react";
import {
  deleteFavorite,
  fetchNewBooks,
  getFavoriteBooks,
  getNewBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledFavoritesPage, FavoriteList } from "./styles";

export const FavoritesPage = () => {
  const { favorite } = useAppSelector(getFavoriteBooks);
  const { results, isLoading } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

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
              deleteFavoriteBook={() => dispatch(deleteFavorite(book))}
            />
          );
        })}
      </FavoriteList>
      {isLoading ? (
        <Title text="Loading..." />
      ) : (
        <DetailsSlider title="New Books" books={results} />
      )}
    </StyledFavoritesPage>
  );
};
