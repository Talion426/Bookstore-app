import { BackArrowButton, Button, Description, Mailing, Title, DetailsTabs } from "components";
import { IBookDetails } from "types";
import {
  StyledBookDetails,
  DescriptionWrapper,
  ImageWrapper,
  Image,
  AddFavoriteButton,
} from "./styles";
import { HeartIcon } from "assets";

interface IProps {
  book: IBookDetails;
  amount: number;
  addToFavorite: () => void;
  addToCart: () => void;
}

export const BookDetails = ({ book, addToFavorite, addToCart }: IProps) => {
  const { title, image } = book;

  const handleAddToCart = () => {
    addToCart();
  };

  const handleAddToFavorite = () => {
    addToFavorite();
  };

  return (
    <section>
      <BackArrowButton />
      <Title text={title} />
      <StyledBookDetails>
        <ImageWrapper>
          <Image src={image} alt={title} />
          <AddFavoriteButton onClick={handleAddToFavorite}>
            <HeartIcon />
          </AddFavoriteButton>
        </ImageWrapper>
        <DescriptionWrapper>
          <Description book={book} />
          <Button type="button" onClick={handleAddToCart}>
            Add to card
          </Button>
        </DescriptionWrapper>
      </StyledBookDetails>
      <DetailsTabs book={book} />
      <Mailing />
    </section>
  );
};
