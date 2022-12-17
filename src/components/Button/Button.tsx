import { StyledButton } from "./styles";

interface Iprops {
  children: string;
  type: "button" | "submit" | "reset";
  buttonWidth?: string;
  buttonColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export const Button = (props: Iprops) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
