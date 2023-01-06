import { HeartIcon } from "assets";
import { Notice, StarsRating } from "components";
import { useToggle } from "hooks";
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

  const [isOpenModal, toggleModal] = useToggle();

  const handleModal = () => {
    toggleModal();

    setTimeout(toggleModal, 3000);
  };

  return (
    <StyledFavoriteItem>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <HeartButton onClick={deleteFavoriteBook}>
          <HeartIcon  />
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

      {isOpenModal && <Notice>Book removed from favorites</Notice>}
    </StyledFavoriteItem>
  );
};
