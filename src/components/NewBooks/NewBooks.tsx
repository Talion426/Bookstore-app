import { useEffect } from "react";
import { Title, BooksList } from "components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { NewBooksWrapper } from "./styles";

export const NewBooks = () => {
  const { isLoading, result } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return isLoading ? (
    <Title text="Loading..." />
  ) : (
    <NewBooksWrapper>
      <Title text="New Releases Books" />
      <BooksList responseBooks={result} />
    </NewBooksWrapper>
  );
};
