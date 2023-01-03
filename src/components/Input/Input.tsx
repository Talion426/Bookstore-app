import { InputWrapper, Label, StyledInput } from "./styles";

interface IProps {
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value?: string;
  disabled?: boolean;
}

export const Input = (props: IProps) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <StyledInput {...props} />
    </InputWrapper>
  );
};
