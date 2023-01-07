import { SearchModalItem } from "components";
import { IBook } from "types";
import { StyledSearchModalList } from "./styles";

interface IProps {
  books: IBook[];
}

export const SearchModalList = ({ books }: IProps) => {
  return (
    <StyledSearchModalList>
      {books.slice(0, 5).map((book) => (
        <SearchModalItem key={book.isbn13} book={book} />
      ))}
    </StyledSearchModalList>
  );
};
