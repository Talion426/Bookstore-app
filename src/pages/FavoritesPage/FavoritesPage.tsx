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
  const dispatch = useAppDispatch();
  const { favorite } = useAppSelector(getFavoriteBooks);
  const { isLoading, result, error } = useAppSelector(getNewBooks);

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
              deleteFavoriteBook={() => dispatch(deleteFavorite(book.isbn13))}
            />
          );
        })}
      </FavoriteList>
      <DetailsSlider title="New Books" books={result} />
    </StyledFavoritesPage>
  );
};
