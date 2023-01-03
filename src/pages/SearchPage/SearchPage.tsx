import { BackArrowButton, BooksList, Title } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "store";
import { SearchBooksWrapper, Subtitle } from "./styles";

export const SearchPage = () => {
  const { page, searchValue } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchSearchBooks({
        searchValue: searchValue,
        page: page,
      }),
    );
  }, [searchValue, page, dispatch]);

  const { result, isLoading, error } = useAppSelector(getSearchBooks);
  const { books, total } = result;

  console.log(result);

  return (
    <SearchBooksWrapper>
      {isLoading && <Title text="Loading..." />}
      {error && <p>{error}</p>}
      {books && books.length === 0 && (
        <>
          <BackArrowButton />
          <Title text="No results" />
        </>
      )}
      {books && books.length > 0 && (
        <>
          <Title text={`'${searchValue}' search results`} />
          <Subtitle>{`Found ${total} books`}</Subtitle>
          {<BooksList books={books} />}
        </>
      )}
    </SearchBooksWrapper>
  );
};
