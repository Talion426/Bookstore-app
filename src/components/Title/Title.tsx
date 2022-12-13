import { StyledTitle } from "./styles";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};
