import { BackArrowButton, BooksList, Pagination, Title } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "store";
import { SearchBooksWrapper, Subtitle } from "./styles";

export const SearchPage = () => {
  const { page, searchValue } = useParams();
  const { results, isLoading } = useAppSelector(getSearchBooks);
  const dispatch = useAppDispatch();

  const { books, total } = results;

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
      {books && books.length > 0 ? (
        <>
          <Title text={`'${searchValue}' search results`} />
          <Subtitle>{`Found ${total} books`}</Subtitle>
          <BooksList books={books} />
          <Pagination pageCount={pageCount} PageClick={handlePageClick} />
        </>
      ) : (
        <>
          <BackArrowButton />
          <Title text="No results" />
        </>
      )}
    </SearchBooksWrapper>
  );
};
