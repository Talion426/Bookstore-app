import { Button } from "components";
import { useForm } from "react-hook-form";
import { StyledReset, ErrorMessage, InputWrapper, Label, StyledInput, Title } from "./styles";
import { confirmPasswordReset, getAuth, verifyPasswordResetCode } from "firebase/auth";
import { setUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

interface IReset {
  password: string;
  confirmPassword: string;
}

export const Reset = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleReset = (userData: IReset) => {
    const { password } = userData;
    const auth = getAuth();

    // eslint-disable-next-line
    const queryParams = new URLSearchParams(location.search);
    const actionCode = queryParams.get("oobCode") || "";

    verifyPasswordResetCode(auth, actionCode)
      .then(() => {
        confirmPasswordReset(auth, actionCode, password)
          .then(() => {
            dispatch(
              setUser({
                password: password,
                isAuth: true,
              }),
            );

            navigate(ROUTE.HOME);
          })
          .catch(() => alert("Error!"));
      })
      .catch(() => alert("Error!"));
  };

  return (
    <StyledReset
      onSubmit={handleSubmit(handleReset)}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
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
    </StyledReset>
  );
};
