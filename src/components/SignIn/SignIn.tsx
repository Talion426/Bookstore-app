import { Button } from "components";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import { StyledSignIn, CustomLink, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

interface ISingIn {
  name: string;
  email: string;
  password: string;
}

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignIn = (userData: ISingIn) => {
    const { name, email, password } = userData;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            name: name,
            password: password,
            isAuth: true,
          }),
        );
        navigate(ROUTE.HOME);
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <StyledSignIn onSubmit={handleSubmit(handleSignIn)}>
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
