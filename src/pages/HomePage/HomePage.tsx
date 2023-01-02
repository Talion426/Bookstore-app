import { Mailing } from "components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { Title, BooksList } from "components";
import { useEffect } from "react";
import { NewBooksWrapper } from "./styles";

export const HomePage = () => {
  const { isLoading, result, error } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <section>
      {isLoading && <Title text="Loading..." />}
      {error && <p>{error}</p>}
      {result && (
        <NewBooksWrapper>
          <Title text="New Releases Books" />
          <BooksList books={result} />
        </NewBooksWrapper>
      )}
      <Mailing />
    </section>
  );
};
