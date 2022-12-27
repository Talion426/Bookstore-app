import { HeartIcon } from "assets";
import {
  Subtitle,
  Title,
  Price,
  Popularity,
  ImageWrapper,
  Image,
  StyledFavoriteItem,
  Description,
  HeartButton,
} from "./styles";

export const FavoriteItem = () => {
  return (
    <StyledFavoriteItem>
      <ImageWrapper>
        <Image src="" alt="" />
        <HeartButton>
          <HeartIcon />
        </HeartButton>
      </ImageWrapper>
      <Description>
        <Title>Robot Operating System (ROS) for Absolute Beginners</Title>
        <Subtitle>by Lentin Joseph, Apress 2018</Subtitle>
        <Popularity>
          <Price>36$</Price>
          <p>* * * * *</p>
        </Popularity>
      </Description>
    </StyledFavoriteItem>
  );
};
