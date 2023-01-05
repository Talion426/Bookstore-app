import { HeartIcon } from "assets";
import { StarsRating } from "components";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { IBookDetails } from "types";
import {
  Subtitle,
  Title,
  Price,
  Popularity,
  ImageWrapper,
  Image,
  StyledFavoriteItem,
  Description,
  HeartButton,
} from "./styles";

interface IProps {
  book: IBookDetails;
  deleteFavoriteBook: () => void;
}

export const FavoriteItem = ({ book, deleteFavoriteBook }: IProps) => {
  const { image, title, subtitle, price, rating, isbn13 } = book;

  return (
    <StyledFavoriteItem>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <HeartButton onClick={deleteFavoriteBook}>
          <HeartIcon />
        </HeartButton>
      </ImageWrapper>
      <Description to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Popularity>
          <Price>{price}</Price>
          <StarsRating stars={rating} />
        </Popularity>
      </Description>
    </StyledFavoriteItem>
  );
};
