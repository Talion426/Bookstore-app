import { BookListItem, Pagination } from "components";
import { IBook } from "types";
import { StyledBooksList } from "./styles";
import { useEffect, useState } from "react";

interface IProps {
  books: IBook[];
}

export const BooksList = ({ books }: IProps) => {
  const [currentItems, setCurrentItems] = useState<IBook[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / ITEMS_PER_PAGE));
  }, [itemOffset, ITEMS_PER_PAGE, books]);

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset = event.selected * ITEMS_PER_PAGE;
    setItemOffset(newOffset);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <StyledBooksList>
        {currentItems.map((book) => (
          <BookListItem key={book.isbn13} book={book} />
        ))}
      </StyledBooksList>
      <Pagination pageCount={pageCount} PageClick={handlePageClick} />
    </>
  );
};
