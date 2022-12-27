import { BackArrowButton, Button, Input, Title } from "components";
import { Color } from "ui";
import { ButtonsWrapper, ProfileWrapper, PasswordWrapper, Subtitle } from "./styles";

export const Account = () => {
  return (
    <form>
      <Subtitle>Profile</Subtitle>
      <ProfileWrapper>
        <Input type="text" placeholder="Name">
          Name
        </Input>
        <Input type="email" placeholder="Email">
          Email
        </Input>
      </ProfileWrapper>
      <Subtitle>Password</Subtitle>
      <PasswordWrapper>
        <Input type="password" placeholder="Password">
          Password
        </Input>
        <Input type="password" placeholder="New password">
          New password
        </Input>
        <Input type="password" placeholder="Confirm new password">
          Confirm new password
        </Input>
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
        >
          Cancel
        </Button>
      </ButtonsWrapper>
    </form>
  );
};
