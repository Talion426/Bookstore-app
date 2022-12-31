import { BooksList, Title } from "components";
import { useEffect } from "react";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { SearchBooksWrapper, Subtitle } from "./styles";

export const SearchPage = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <Title text="Loading..." />
      ) : (
        <SearchBooksWrapper>
          <Title text="' ' Search result" />
          <Subtitle>{`Found ${result.length} books`}</Subtitle>
          <BooksList books={result} />
        </SearchBooksWrapper>
      )}
    </section>
  );
};
