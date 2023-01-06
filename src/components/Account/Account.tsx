import { Button, Input, Notice } from "components";
import { removeUser, setUser, useAppDispatch } from "store";
import { Color } from "ui";
import {
  ButtonsWrapper,
  ProfileWrapper,
  PasswordWrapper,
  NewPasswordWrapper,
  Subtitle,
  StyledAccount,
  InputWrapper,
  Label,
  StyledInput,
  ErrorMessage,
} from "./styles";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { useToggle } from "hooks";

interface IUserData {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface IProps {
  name: string;
  email: string;
  password: string;
}

export const Account = ({ email, name, password }: IProps) => {
  const dispatch = useAppDispatch();

  const auth = getAuth();

  const displayName = auth.currentUser?.displayName;
  const currentEmail = auth.currentUser?.email;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      email: email,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const [isOpenModal, toggleModal] = useToggle();

  const handleModal = () => {
    toggleModal();

    setTimeout(toggleModal, 3000);
  };

  const handleUserAccount = (userData: IUserData) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updatePassword(user, userData.newPassword)
        .then(() => {
          dispatch(
            setUser({
              name: displayName,
              email: currentEmail,
              password: userData.newPassword,
            }),
          );
        })
        .then(() => {
          handleModal();
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    reset();
  };

  return (
    <StyledAccount onSubmit={handleSubmit(handleUserAccount)}>
      <Subtitle>Profile</Subtitle>

      <ProfileWrapper>
        <Input
          label="Name"
          type="text"
          placeholder="Your Name"
          value={String(displayName)}
          disabled
        />
        <Input
          label="Email"
          type="email"
          placeholder="Your Email"
          value={String(currentEmail)}
          disabled
        />
      </ProfileWrapper>

      <Subtitle>Password</Subtitle>

      <PasswordWrapper>
        <Input
          label="Password"
          type="password"
          placeholder="Your Password"
          value={password}
          disabled
        />
      </PasswordWrapper>

      <NewPasswordWrapper>
        <InputWrapper>
          <Label>New password</Label>
          <StyledInput
            {...register("newPassword", {
              required: {
                value: true,
                message: "Required field!",
              },
              minLength: {
                value: 8,
                message: "You must enter at least 8 characters!",
              },
            })}
            type="password"
            placeholder="New password"
          />
          <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
        </InputWrapper>

        <InputWrapper>
          <Label>Confirm new password</Label>
          <StyledInput
            {...register("confirmNewPassword", {
              required: {
                value: true,
                message: "Required field!",
              },
              validate: (value) => {
                return value === watch("newPassword") || "Password does not match";
              },
            })}
            type="password"
            placeholder="Confirm new password"
          />
          <ErrorMessage>{errors.confirmNewPassword?.message}</ErrorMessage>
        </InputWrapper>
      </NewPasswordWrapper>

      <ButtonsWrapper>
        <Button type="submit" buttonWidth="227px">
          Save changes
        </Button>
        <Button
          type="reset"
          buttonWidth="227px"
          buttonColor={Color.Primary}
          backgroundColor={Color.Primary_Background}
          borderColor={Color.Primary}
          onClick={() => dispatch(removeUser())}
        >
          Log out
        </Button>
      </ButtonsWrapper>

      {isOpenModal && <Notice>Password changed</Notice>}
    </StyledAccount>
  );
};
