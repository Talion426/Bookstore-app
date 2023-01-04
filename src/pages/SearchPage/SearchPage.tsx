import { BackArrowButton, BooksList, Pagination, Title } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "store";
import { SearchBooksWrapper, Subtitle } from "./styles";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const { page, searchValue } = useParams();
  const { result, isLoading, error } = useAppSelector(getSearchBooks);
  const { books, total } = result;

  const ITEMS_PER_PAGE = 10;
  const pageCount = Math.ceil(+total / ITEMS_PER_PAGE);
  const [itemOffset, setItemOffset] = useState(page);

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = event.selected;

    if (newOffset) {
      setItemOffset(String(newOffset));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(
      fetchSearchBooks({
        searchValue: searchValue,
        page: itemOffset,
      }),
    );
  }, [searchValue, itemOffset, dispatch]);

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
          <Pagination pageCount={pageCount} PageClick={handlePageClick} />
        </>
      )}
    </SearchBooksWrapper>
  );
};
