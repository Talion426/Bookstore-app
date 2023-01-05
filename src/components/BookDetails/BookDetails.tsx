import { BackArrowButton, Button, Description, Title, DetailsTabs } from "components";
import { IBookDetails } from "types";
import {
  StyledBookDetails,
  DescriptionWrapper,
  ImageWrapper,
  Image,
  AddFavoriteButton,
  Rewiew,
} from "./styles";
import { HeartIcon } from "assets";
import { getFavoriteBooks, useAppSelector } from "store";
import { Color } from "ui";

interface IProps {
  book: IBookDetails;
  amount: number;
  handleToFavorite: () => void;
  addToCart: () => void;
}

export const BookDetails = ({ book, handleToFavorite, addToCart }: IProps) => {
  const { title, image, isbn13, url } = book;
  const { favorite } = useAppSelector(getFavoriteBooks);

  const handleToggleToCart = () => {
    addToCart();
  };

  const handleToggleToFavorite = () => {
    handleToFavorite();
  };

  const findFavorite = () => {
    if (favorite.length > 0) {
      return favorite.find((item) => item.isbn13 === isbn13);
    } else return false;
  };

  return (
    <section>
      <BackArrowButton />
      <Title text={title} />
      <StyledBookDetails>
        <ImageWrapper>
          <Image src={image} alt={title} />
          <AddFavoriteButton onClick={handleToggleToFavorite}>
            {findFavorite() ? (
              <HeartIcon fill={Color.Red} stroke={Color.Red} />
            ) : (
              <HeartIcon stroke={Color.Primary_Background} />
            )}
          </AddFavoriteButton>
        </ImageWrapper>
        <DescriptionWrapper>
          <Description book={book} />
          <Button type="button" onClick={handleToggleToCart}>
            Add to cart
          </Button>
          <Rewiew href={url} target="_blank">
            Preview book
          </Rewiew>
        </DescriptionWrapper>
      </StyledBookDetails>
      <DetailsTabs book={book} />
    </section>
  );
};
