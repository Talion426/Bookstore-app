import { Button } from "components";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { StyledSignIn, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

interface ISingIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

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

  const handleSignIn = (userData: ISingIn) => {
    const { email, password } = userData;

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            password: password,
            isAuth: true,
          }),
        );

        navigate(ROUTE.HOME);
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <StyledSignIn
      onSubmit={handleSubmit(handleSignIn)}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
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

      <CustomLink to={ROUTE.FORGOT}>Foggot password?</CustomLink>
      <Button type="submit">Sign in</Button>
    </StyledSignIn>
  );
};
