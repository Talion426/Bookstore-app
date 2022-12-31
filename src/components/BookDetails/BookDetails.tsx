import { BackArrowButton, Button, Description, Mailing, Title } from "components";
import { IBookDetails } from "types";
import { StyledBookDetails, DescriptionWrapper, ImageWrapper, Image } from "./styles";

interface IProps {
  book: IBookDetails;
}

export const BookDetails = ({ book }: IProps) => {
  const { title, image } = book;

  return (
    <section>
      <BackArrowButton />
      <Title text={title} />
      <StyledBookDetails>
        <ImageWrapper>
          <Image src={image} alt={title} />
        </ImageWrapper>
        <DescriptionWrapper>
          <Description book={book} />
          <Button type="button">add to card</Button>
        </DescriptionWrapper>
      </StyledBookDetails>
      <Mailing />
    </section>
  );
};
