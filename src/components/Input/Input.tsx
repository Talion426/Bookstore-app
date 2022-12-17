import { InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  children: string;
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder, children }: IProps) => {
  return (
    <InputWrapper>
      <Label>{children}</Label>
      <StyledInput type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};
