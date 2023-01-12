import { BackArrowButton, Button, Description, Title, DetailsTabs, Notice } from "components";
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
import { useToggle } from "hooks";

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
    }

    return false;
  };

  const [isOpenFavoriteModal, toggleFavoriteModal] = useToggle();
  const [isOpenCartModal, toggleCartModal] = useToggle();

  const handleFavoriteModal = () => {
    toggleFavoriteModal();

    setTimeout(toggleFavoriteModal, 3000);
  };

  const handleCartModal = () => {
    toggleCartModal();

    setTimeout(toggleCartModal, 3000);
  };

  return (
    <section>
      <BackArrowButton />
      <Title text={title} />
      <StyledBookDetails>
        <ImageWrapper>
          <Image src={image} alt={title} />
          <AddFavoriteButton
            onClick={() => {
              handleToggleToFavorite();
              handleFavoriteModal();
            }}
          >
            {findFavorite() ? (
              <HeartIcon fill={Color.Red} stroke={Color.Red} />
            ) : (
              <HeartIcon stroke={Color.Primary_Background} />
            )}
          </AddFavoriteButton>
        </ImageWrapper>
        <DescriptionWrapper>
          <Description book={book} />
          <Button
            type="button"
            onClick={() => {
              handleToggleToCart();
              handleCartModal();
            }}
          >
            Add to cart
          </Button>
          <Rewiew href={url} target="_blank">
            Preview book
          </Rewiew>
        </DescriptionWrapper>
      </StyledBookDetails>
      <DetailsTabs book={book} />

      {isOpenFavoriteModal && <Notice>Book added to favorites</Notice>}
      {isOpenCartModal && <Notice>Book added to cart</Notice>}
    </section>
  );
};
