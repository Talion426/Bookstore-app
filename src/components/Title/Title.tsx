import { StyledTitle } from "./styles";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return (
    <StyledTitle
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {text}
    </StyledTitle>
  );
};
