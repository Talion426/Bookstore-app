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

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const favoriteVariants = {
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
    <StyledFavoriteItem
      variants={favoriteVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <ImageWrapper>
        <Image src={image} alt={title} />
        <HeartButton onClick={deleteFavoriteBook} whileHover={{ scale: 1.2 }}>
          <HeartIcon />
        </HeartButton>
      </ImageWrapper>
      <Description to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })} onClick={handleScroll}>
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
