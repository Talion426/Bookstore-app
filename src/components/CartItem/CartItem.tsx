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
import { ROUTE } from "router";
import { generatePath } from "react-router-dom";
import { Notice } from "components";
import { useToggle } from "hooks";

interface IProps {
  book: ICartItem;
  deleteBook: () => void;
  incAmount: () => void;
  decAmount: () => void;
}

export const CartItem = ({ book, deleteBook, incAmount, decAmount }: IProps) => {
  const { image, title, subtitle, price, summary, isbn13 } = book;

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
    <StyledCartItem>
      <ImageWrapper>
        <Image src={image} alt={title} />
        <DeleteButton onClick={handleDeleteBook}>
          <CancelIcon />
        </DeleteButton>
      </ImageWrapper>
      <Description>
        <Title to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })} onClick={handleScroll}>
          {title}
        </Title>
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

      {isOpenModal && <Notice>Book removed from cart</Notice>}
    </StyledCartItem>
  );
};
