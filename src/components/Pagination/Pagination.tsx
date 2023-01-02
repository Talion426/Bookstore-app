import ReactPaginate from "react-paginate";
import { StyledPagination, Button } from "./styles";
import { NextArrowIcon, PrevArrowIcon } from "assets";
import { Color } from "ui";

interface IProps {
  pageCount: number;
  PageClick: (event: { selected: number }) => void;
}

export const Pagination = ({ pageCount, PageClick }: IProps) => {
  return (
    <StyledPagination>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <Button>
            <span>Next</span>
            <NextArrowIcon fill={Color.Primary} />
          </Button>
        }
        onPageChange={PageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <Button>
            <PrevArrowIcon fill={Color.Primary} />
            <span>Prev</span>
          </Button>
        }
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
  );
};
