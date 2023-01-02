import { Button } from "components";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { StyledSignIn, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store";
import { useDispatch } from "react-redux";

interface ISingIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = ({ email, password }: ISingIn) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            isAuth: true,
          }),
        );
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <StyledSignIn onSubmit={handleSubmit(handleSignIn)}>
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

      <InputWrapper>
        <Label>Password</Label>
        <StyledInput
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
          type="password"
          placeholder="Your password"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </InputWrapper>

      <CustomLink to={ROUTE.RESET}>Foggot password?</CustomLink>
      <Button type="submit">Sign in</Button>
    </StyledSignIn>
  );
};
