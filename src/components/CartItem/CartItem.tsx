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

  const cartVariants = {
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
    <StyledCartItem
      variants={cartVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <ImageWrapper>
        <Image src={image} alt={title} />
        <DeleteButton onClick={handleDeleteBook} whileHover={{ scale: 1.2 }}>
          <CancelIcon />
        </DeleteButton>
      </ImageWrapper>
      <Description>
        <Title to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })} onClick={handleScroll}>
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <ButtonsWrapper>
          <Button onClick={handleDecAmount} disabled={handleSummary()} whileHover={{ scale: 1.1 }}>
            <MinusIcon />
          </Button>
          <Counter>{summary}</Counter>
          <Button onClick={handleIncAmount} whileHover={{ scale: 1.1 }}>
            <PlusIcon />
          </Button>
        </ButtonsWrapper>
      </Description>
      <Price>{price}</Price>
    </StyledCartItem>
  );
};
