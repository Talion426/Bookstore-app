import { Button, Notice } from "components";
import { useForm } from "react-hook-form";
import { StyledSignUp, ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { setUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useToggle } from "hooks";

interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate(ROUTE.HOME);
  };

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

  const [isOpenModal, toggleModal] = useToggle();

  const handleModal = () => {
    toggleModal();

    setTimeout(toggleModal, 3000);
  };

  const handleSignUp = (userData: ISignUp) => {
    const { email, password, name } = userData;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            password: password,
            name: name,
            isAuth: true,
          }),
        );
      })
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: name,
          });
        }
      })
      .then(() => {
        handleModal();
      })
      .then(() => {
        setTimeout(homeNavigate, 3000);
      })
      .catch(() => alert("User existing!"));
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(handleSignUp)}>
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
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
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

      <Button type="submit">Sign up</Button>

      {isOpenModal && <Notice>You have registered a new account</Notice>}
    </StyledSignUp>
  );
};
