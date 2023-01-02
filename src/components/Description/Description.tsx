import { StarsRating } from "components";
import { IBookDetails } from "types";
import {
  Price,
  PriceBlock,
  DescriptionItem,
  StyledDescription,
  DescriptionTitle,
  Text,
} from "./styles";

interface IProps {
  book: IBookDetails;
}

export const Description = ({ book }: IProps) => {
  const { price, rating, authors, pages, publisher, language, year } = book;

  return (
    <StyledDescription>
      <PriceBlock>
        <Price>{price}</Price>
        <StarsRating stars={rating} />
      </PriceBlock>
      <DescriptionItem>
        <Text>Authors:</Text>
        <DescriptionTitle>{authors}</DescriptionTitle>
      </DescriptionItem>
      <DescriptionItem>
        <Text>Publisher:</Text>
        <DescriptionTitle>{publisher}</DescriptionTitle>
      </DescriptionItem>
      <DescriptionItem>
        <Text>Language:</Text>
        <DescriptionTitle>{language}</DescriptionTitle>
      </DescriptionItem>
      <DescriptionItem>
        <Text>Year:</Text>
        <DescriptionTitle>{year}</DescriptionTitle>
      </DescriptionItem>
      <DescriptionItem>
        <Text>Pages:</Text>
        <DescriptionTitle>{pages}</DescriptionTitle>
      </DescriptionItem>
    </StyledDescription>
  );
};
