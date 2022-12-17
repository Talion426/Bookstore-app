import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
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
  image: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  isbn13: string;
}

export const BookListItem = ({ image, title, url, subtitle, price, isbn13 }: IProps) => {
  return (
    <BooksListItem>
      <Link to={generatePath(ROUTE.BOOK, { isbn13 })}>
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
