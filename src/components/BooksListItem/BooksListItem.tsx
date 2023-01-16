import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IBook } from "types";
import { Color } from "ui";
import {
  PriceWrapper,
  ImageWrapper,
  BooksListItem,
  ContentWrapper,
  Subtitle,
  Title,
  Price,
  Image,
} from "./styles";

interface IProps {
  book: IBook;
}

export const BookListItem = ({ book }: IProps) => {
  const { image, title, subtitle, isbn13, price } = book;

  const listVariants = {
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
    hover: {
      scale: 1.03,
      boxShadow: `3px 3px 10px ${Color.Secondary}`,
    },
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BooksListItem
      variants={listVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Link to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })} onClick={handleScroll}>
        <ImageWrapper>
          <Image src={image} alt={title} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{title.length < 65 ? title : `${title.slice(0, 65)}...`}</Title>
          <Subtitle>{subtitle.length < 50 ? subtitle : `${subtitle.slice(0, 50)}...`}</Subtitle>
          <PriceWrapper>
            <Price>{price}</Price>
          </PriceWrapper>
        </ContentWrapper>
      </Link>
    </BooksListItem>
  );
};
