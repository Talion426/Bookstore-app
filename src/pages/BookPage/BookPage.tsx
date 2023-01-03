import { BookDetails, DetailsSlider, Mailing, Title } from "components";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  addBook,
  addFavorite,
  deleteFavorite,
  fetchGetBookDetails,
  getBookDetails,
  getCartBooks,
  getFavoriteBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledBookPage } from "./styles";

export const BookPage = () => {
  const { isbn13 } = useParams();
  const { result, isLoading, error } = useAppSelector(getBookDetails);
  const { amount } = useAppSelector(getCartBooks);
  const { favorite } = useAppSelector(getFavoriteBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetBookDetails({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);

  const findFavorite = () => {
    if (favorite.length > 0) {
      return favorite.find((item) => item.isbn13 === result.isbn13);
    } else return false;
  };

  return (
    <StyledBookPage>
      {isLoading && <Title text="Loading..." />}
      {error && <p>{error}</p>}
      {result && (
        <>
          <BookDetails
            book={result}
            amount={amount}
            addToCart={() => dispatch(addBook(result))}
            handleToFavorite={() => {
              findFavorite()
                ? dispatch(deleteFavorite(result.isbn13))
                : dispatch(addFavorite(result));
            }}
          />
          <Mailing />
        </>
      )}
    </StyledBookPage>
  );
};

//<DetailsSlider />
