import { BookDetails, Mailing, Title } from "components";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  addBook,
  addFavorite,
  deleteFavorite,
  fetchGetBookDetails,
  getBookDetails,
  getFavoriteBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledBookPage } from "./styles";

export const BookPage = () => {
  const { isbn13 } = useParams();

  const { results, isLoading } = useAppSelector(getBookDetails);
  const { favorite } = useAppSelector(getFavoriteBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetBookDetails({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);

  const findFavorite = () => {
    if (favorite.length > 0) {
      return favorite.find((item) => item.isbn13 === results.isbn13);
    } else return false;
  };

  const cartItem = { ...results, summary: 1 };

  return (
    <StyledBookPage>
      {isLoading ? (
        <Title text="Loading..." />
      ) : (
        <>
          <BookDetails
            book={results}
            addToCart={() => dispatch(addBook(cartItem))}
            handleToFavorite={() => {
              findFavorite() ? dispatch(deleteFavorite(results)) : dispatch(addFavorite(results));
            }}
          />
          <Mailing />
        </>
      )}
    </StyledBookPage>
  );
};
