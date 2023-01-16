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
import { getAuth, updatePassword } from "firebase/auth";
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

          handleModal();
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    reset();
  };

  const accountVariants = {
    visible: (i: number) => {
      const delay = 0.5 + i * 0.1;
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      };
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <StyledAccount onSubmit={handleSubmit(handleUserAccount)}>
      <Subtitle variants={accountVariants} initial="hidden" animate="visible" custom={1}>
        Profile
      </Subtitle>

      <ProfileWrapper variants={accountVariants} initial="hidden" animate="visible" custom={2}>
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

      <Subtitle variants={accountVariants} initial="hidden" animate="visible" custom={3}>
        Password
      </Subtitle>

      <PasswordWrapper variants={accountVariants} initial="hidden" animate="visible" custom={4}>
        <Input
          label="Password"
          type="password"
          placeholder="Your Password"
          value={password}
          disabled
        />
      </PasswordWrapper>

      <NewPasswordWrapper variants={accountVariants} initial="hidden" animate="visible" custom={5}>
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

      <ButtonsWrapper variants={accountVariants} initial="hidden" animate="visible" custom={6}>
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
