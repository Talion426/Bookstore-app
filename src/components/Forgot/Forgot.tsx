import { Button } from "components";
import { useForm } from "react-hook-form";
import {
  StyledForgot,
  ErrorMessage,
  InputWrapper,
  Label,
  StyledInput,
  Title,
  CompleteMessage,
  CustomLink,
} from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { getUser, useAppSelector } from "store";
import { ROUTE } from "router";
import { useToggle } from "hooks";

interface IForgot {
  email: string;
}

export const Forgot = () => {
  const { email } = useAppSelector(getUser);

  const [isSent, setSent] = useToggle(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleForgot = (userData: IForgot) => {
    const { email } = userData;
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSent();
      })
      .catch(() => alert("Invalid email!"));
  };

  return (
    <StyledForgot
      onSubmit={handleSubmit(handleForgot)}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <Title>Reset password</Title>

      {isSent && (
        <CompleteMessage>
          You will receive an email <span>{`${email}`}</span> with a link to reset your password!
        </CompleteMessage>
      )}

      <InputWrapper>
        <Label>Email</Label>
        <StyledInput
          {...register("email", {
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter the correct email!",
            },
            required: {
              value: true,
              message: "Email is required field!",
            },
          })}
          type="text"
          placeholder="Your email"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </InputWrapper>
      {isSent ? (
        <CustomLink to={ROUTE.HOME}>Go to home</CustomLink>
      ) : (
        <Button type="submit">Reset</Button>
      )}
    </StyledForgot>
  );
};
