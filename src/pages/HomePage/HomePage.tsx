import { Mailing } from "components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { Title, BooksList } from "components";
import { useEffect } from "react";
import { NewBooksWrapper } from "./styles";

export const HomePage = () => {
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
        <NewBooksWrapper>
          <Title text="New Releases Books" />
          <BooksList responseBooks={result} />
        </NewBooksWrapper>
      )}
      <Mailing />
    </section>
  );
};
