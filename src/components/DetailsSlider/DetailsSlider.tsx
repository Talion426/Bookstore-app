import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledDetailsSlider, Title } from "./styles";
import { NextArrowIcon, PrevArrowIcon } from "assets";
import { Color } from "ui";
import { IBook } from "types";
import { BookListItem } from "components";

interface IProps {
  title: string;
  books: IBook[];
}

export const DetailsSlider = ({ title, books }: IProps) => {
  const settings = {
    dots: false,
    nextArrow: <NextArrowIcon fill={Color.Primary} />,
    prevArrow: <PrevArrowIcon fill={Color.Primary} />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledDetailsSlider>
      <Title>{title}</Title>
      <Slider {...settings}>
        {books.map((book) => (
          <BookListItem key={book.isbn13} book={book} />
        ))}
      </Slider>
    </StyledDetailsSlider>
  );
};
