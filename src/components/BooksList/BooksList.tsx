import { BookListItem } from "components";
import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IBook } from "types";
import { StyledBooksList, StyledPagination } from "./styles";

interface IProps {
  responseBooks: IBook[];
}

export const BooksList = ({ responseBooks }: IProps) => {
  /* PAGINATION */
  const [currentItems, setCurrentItems] = useState<object>({});
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(responseBooks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(responseBooks.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, responseBooks]);

  const handlePageClick = (event: any): void => {
    const newOffset = (event.selected * itemsPerPage) / responseBooks.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <StyledBooksList>
        {responseBooks.map(({ isbn13, image, price, title, subtitle, url }) => (
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
          pageRangeDisplayed={3}
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
          breakLinkClassName="paginate__break-link"
          pageLinkClassName="paginate__page-link"
          activeLinkClassName="paginate__active-link"
          previousLinkClassName="paginate__previous-link"
          nextLinkClassName="paginate__next-link"
          disabledLinkClassName="paginate__disabled-link"
        />
      </StyledPagination>
    </>
  );
};
