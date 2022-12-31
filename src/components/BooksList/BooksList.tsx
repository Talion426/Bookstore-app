import { BookListItem } from "components";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IBook } from "types";
import { StyledBooksList, StyledPagination } from "./styles";

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
      <StyledPagination>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={undefined}
          containerClassName="paginate__container"
          breakClassName="paginate__break"
          pageClassName="paginate__page"
          activeClassName="paginate__active"
          previousClassName="paginate__previous"
          nextClassName="paginate__next"
          disabledClassName="paginate__disabled"
        />
      </StyledPagination>
    </>
  );
};
