import { Button, Notice } from "components";
import { useForm } from "react-hook-form";
import { StyledReset, ErrorMessage, InputWrapper, Label, StyledInput, Title } from "./styles";
import { confirmPasswordReset, getAuth } from "firebase/auth";
import { setUser } from "store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useToggle } from "hooks";

interface IReset {
  password: string;
  confirmPassword: string;
}

export const Reset = () => {
  const dispatch = useDispatch();
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
      password: "",
      confirmPassword: "",
    },
  });

  const [isOpenModal, toggleModal] = useToggle();

  const handleModal = () => {
    toggleModal();

    setTimeout(toggleModal, 3000);
  };

  const handleReset = (userData: IReset) => {
    const { password, confirmPassword } = userData;
    const auth = getAuth();

    confirmPasswordReset(auth, password, confirmPassword)
      .then(() => {
        dispatch(
          setUser({
            password: password,
            isAuth: true,
          }),
        );
      })
      .then(() => {
        handleModal();
      })
      .then(() => {
        setTimeout(homeNavigate, 3000);
      })
      .catch(() => alert("Error!"));
  };

  return (
    <StyledReset onSubmit={handleSubmit(handleReset)}>
      <Title>New password</Title>

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

      <Button type="submit">Set password</Button>

      {isOpenModal && <Notice>Password changed</Notice>}
    </StyledReset>
  );
};
