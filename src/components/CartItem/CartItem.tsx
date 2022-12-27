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

export const CartItem = () => {
  const counter = 1;

  return (
    <StyledCartItem>
      <ImageWrapper>
        <Image src="" alt="" />
        <DeleteButton>
          <CancelIcon />
        </DeleteButton>
      </ImageWrapper>
      <Description>
        <Title>Robot Operating System (ROS) for Absolute Beginners </Title>
        <Subtitle>by Lentin Joseph, Apress 2018</Subtitle>
        <ButtonsWrapper>
          <Button>
            <MinusIcon />
          </Button>
          <Counter>{counter}</Counter>
          <Button>
            <PlusIcon />
          </Button>
        </ButtonsWrapper>
      </Description>
      <Price>$31.38</Price>
    </StyledCartItem>
  );
};
