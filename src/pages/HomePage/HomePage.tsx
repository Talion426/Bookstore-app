import { Mailing, Title, BooksList } from "components";
import { fetchNewBooks, getNewBooks, useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { NewBooksWrapper, StyledHomePage } from "./styles";

export const HomePage = () => {
  const { isLoading, results } = useAppSelector(getNewBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isLoading ? (
        <Title text="Loading..." />
      ) : (
        <>
          <NewBooksWrapper>
            <Title text="New Releases Books" />
            <BooksList books={results} />
          </NewBooksWrapper>
          <Mailing />
        </>
      )}
    </StyledHomePage>
  );
};
