import { InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  children: string;
  type: string;
  placeholder: string;
  inputWidth?: string;
}

export const Input = (props: IProps) => {
  return (
    <InputWrapper>
      <Label>{props.children}</Label>
      <StyledInput {...props} />
    </InputWrapper>
  );
};
