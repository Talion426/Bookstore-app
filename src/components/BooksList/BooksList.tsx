import { BookListItem } from "..";
import { IBook } from "../../types";
import { StyledBooksList } from "./styles";

interface IProps {
  responseBooks: IBook[];
}

export const BooksList = ({ responseBooks }: IProps) => {
  return (
    <StyledBooksList>
      {responseBooks.map(({ isbn13, image, price, title, subtitle, url }) => (
        <BookListItem
          key={isbn13}
          image={image}
          price={price}
          subtitle={subtitle}
          title={title}
          url={url}
          isbn13={isbn13}
        />
      ))}
    </StyledBooksList>
  );
};
