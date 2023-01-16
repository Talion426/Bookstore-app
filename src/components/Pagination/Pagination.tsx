import ReactPaginate from "react-paginate";
import { StyledPagination, Button } from "./styles";
import { NextArrowIcon, PrevArrowIcon } from "assets";
import { Color } from "ui";

interface IProps {
  pageCount: number;
  PageClick: (event: { selected: number }) => void;
}

export const Pagination = ({ pageCount, PageClick }: IProps) => {
  const paginationVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <StyledPagination
      variants={paginationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
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
