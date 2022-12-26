import { Button } from "components";
import { useForm } from "react-hook-form";
import { StyledSignUp, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";

interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ISignUp) => {
    return data;
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Name</Label>
        <StyledInput
          type="text"
          placeholder="Your name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is required field!",
            },
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <StyledInput
          type="text"
          placeholder="Your email"
          {...register("email", {
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter the correct email!",
            },
            required: {
              value: true,
              message: "Email is required field!",
            },
          })}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <Label>Password</Label>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required field!",
            },
            minLength: {
              value: 8,
              message: "You must enter at least 8 characters!",
            },
          })}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </InputWrapper>

      <InputWrapper>
        <Label>Confirm password</Label>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "This is required field!",
            },
            validate: (value) => {
              return value === watch("password") || "Password does not match";
            },
          })}
        />
        <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
      </InputWrapper>

      <Button type="submit">Sign on</Button>
    </StyledSignUp>
  );
};
