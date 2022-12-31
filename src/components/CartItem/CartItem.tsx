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
import { IBook } from "types";

interface IProps {
  book: IBook;
  amount: number;
  deleteBook: () => void;
  incAmount: () => void;
  decAmount: () => void;
}

export const CartItem = ({ book, amount, deleteBook, incAmount, decAmount }: IProps) => {
  const { image, title, subtitle, price } = book;

  const handleDeleteBook = () => {
    deleteBook();
  };

  const handleIncAmount = () => {
    incAmount();
  };

  const handleDecAmount = () => {
    decAmount();
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
          <Button onClick={handleDecAmount}>
            <MinusIcon />
          </Button>
          <Counter>{amount}</Counter>
          <Button onClick={handleIncAmount}>
            <PlusIcon />
          </Button>
        </ButtonsWrapper>
      </Description>
      <Price>{price}</Price>
    </StyledCartItem>
  );
};
