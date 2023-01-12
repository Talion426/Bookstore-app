import { BookListItem } from "components";
import { IBook } from "types";
import { StyledBooksList } from "./styles";

interface IProps {
  books: IBook[];
}

export const BooksList = ({ books }: IProps) => {
  return (
    <StyledBooksList>
      {books.map((book) => (
        <BookListItem key={book.isbn13} book={book} />
      ))}
    </StyledBooksList>
  );
};
