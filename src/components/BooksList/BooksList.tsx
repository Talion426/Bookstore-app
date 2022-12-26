import { BookListItem } from "components";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IBook } from "types";
import { StyledBooksList, StyledPagination } from "./styles";

interface IProps {
  responseBooks: IBook[];
}

export const BooksList = ({ responseBooks }: IProps) => {
  const [currentItems, setCurrentItems] = useState<IBook[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(responseBooks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(responseBooks.length / ITEMS_PER_PAGE));
  }, [itemOffset, ITEMS_PER_PAGE, responseBooks]);

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
        {currentItems.map(({ isbn13, image, price, title, subtitle, url }) => (
          <BookListItem
            key={isbn13}
            image={image}
            price={price}
            subtitle={subtitle}
            title={title}
            url={url}
            isbn13={isbn13}
          />
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
