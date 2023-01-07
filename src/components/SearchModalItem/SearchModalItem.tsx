import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IBook } from "types";
import { ImageWrapper, SearchModalItemWrapper, Title, Image } from "./styles";

interface IProps {
  book: IBook;
}

export const SearchModalItem = ({ book }: IProps) => {
  const { image, title, isbn13 } = book;

  return (
    <Link to={generatePath(ROUTE.BOOK, { isbn13: isbn13 })}>
      <SearchModalItemWrapper>
        <ImageWrapper>
          <Image src={image} alt={title} />
        </ImageWrapper>
        <Title>{title}</Title>
      </SearchModalItemWrapper>
    </Link>
  );
};
