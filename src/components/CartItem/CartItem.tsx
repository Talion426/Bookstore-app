import { CancelIcon, MinusIcon, PlusIcon } from "assets";
import {
  StyledCartItem,
  ImageWrapper,
  Image,
  Description,
  Title,
  Subtitle,
  ButtonsWrapper,
  Button,
  Counter,
  Price,
  DeleteButton,
} from "./styles";
import { ICartItem } from "types";

interface IProps {
  book: ICartItem;
  deleteBook: () => void;
  incAmount: () => void;
  decAmount: () => void;
}

export const CartItem = ({ book, deleteBook, incAmount, decAmount }: IProps) => {
  const { image, title, subtitle, price, summary } = book;

  const handleDeleteBook = () => {
    deleteBook();
  };

  const handleIncAmount = () => {
    incAmount();
  };

  const handleDecAmount = () => {
    decAmount();
  };

  const handleSummary = () => {
    return summary === 1;
  };

  return (
    <StyledCartItem>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <DeleteButton onClick={handleDeleteBook}>
          <CancelIcon />
        </DeleteButton>
      </ImageWrapper>
      <Description>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <ButtonsWrapper>
          <Button onClick={handleDecAmount} disabled={handleSummary()}>
            <MinusIcon />
          </Button>
          <Counter>{summary}</Counter>
          <Button onClick={handleIncAmount}>
            <PlusIcon />
          </Button>
        </ButtonsWrapper>
      </Description>
      <Price>{price}</Price>
    </StyledCartItem>
  );
};
