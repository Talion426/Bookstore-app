import { HeartIcon } from "assets";
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
  const { image, title, subtitle, price, rating } = book;

  return (
    <StyledFavoriteItem>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <HeartButton onClick={deleteFavoriteBook}>
          <HeartIcon />
        </HeartButton>
      </ImageWrapper>
      <Description>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Popularity>
          <Price>{price}</Price>
          <p>* * * * *</p>
        </Popularity>
      </Description>
    </StyledFavoriteItem>
  );
};
