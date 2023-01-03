import { Button, Input } from "components";
import { getUser, removeUser, useAppDispatch, useAppSelector } from "store";
import { Color } from "ui";
import { ButtonsWrapper, ProfileWrapper, PasswordWrapper, Subtitle } from "./styles";

export const Account = () => {
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(getUser);

  return (
    <form>
      <Subtitle>Profile</Subtitle>
      <ProfileWrapper>
        <Input type="text" placeholder="Name" label="Name" value={name} disabled />
        <Input type="email" placeholder="Email" label="Email" value={email} disabled />
      </ProfileWrapper>
      <Subtitle>Password</Subtitle>
      <PasswordWrapper>
        <Input type="password" placeholder="Password" label="Password" value={password} disabled />
        <Input type="password" placeholder="New password" label="New password" />
        <Input type="password" placeholder="Confirm new password" label="Confirm new password" />
      </PasswordWrapper>
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
    </form>
  );
};
