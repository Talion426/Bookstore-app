import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledDetailsSlider, Title } from "./styles";
import { NextArrowIcon, PrevArrowIcon } from "assets";
import { Color } from "ui";

export const DetailsSlider = () => {
  const settings = {
    dots: false,
    nextArrow: <NextArrowIcon fill={Color.Primary} />,
    prevArrow: <PrevArrowIcon fill={Color.Primary} />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <StyledDetailsSlider>
      <Title>Similar Books</Title>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Slider>
    </StyledDetailsSlider>
  );
};
