import { BookDetails, Title } from "components";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  addBook,
  addFavorite,
  fetchGetBookDetails,
  getBookDetails,
  getCartBooks,
  useAppDispatch,
  useAppSelector,
} from "store";
import { StyledBookPage } from "./styles";

export const BookPage = () => {
  const { isbn13 } = useParams();
  const { result, isLoading, error } = useAppSelector(getBookDetails);
  const { amount } = useAppSelector(getCartBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetBookDetails({ isbn13: isbn13 }));
  }, [dispatch, isbn13]);

  return (
    <StyledBookPage>
      {isLoading && <Title text="Loading..." />}
      {error && <p>{error}</p>}
      {result && (
        <BookDetails
          book={result}
          amount={amount}
          addToCart={() => dispatch(addBook(result))}
          addToFavorite={() => dispatch(addFavorite(result))}
        />
      )}
    </StyledBookPage>
  );
};
