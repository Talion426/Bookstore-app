import { BackArrowIcon } from "assets";
import { Button, Input, Title } from "components";
import { ROUTE } from "router";
import { Color } from "ui";
import { ButtonsWrapper, StyledArrow, ProfileWrapper, PasswordWrapper, Subtitle } from "./styles";

export const Account = () => {
  return (
    <form>
      <StyledArrow to={ROUTE.HOME}>
        <BackArrowIcon fill={Color.Primary} />
      </StyledArrow>
      <Title text="Account" />
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
/*
      <div>
        <Input type="password" placeholder="password">
          password
        </Input>
        <Input type="password" placeholder="new password">
          new password
        </Input>
        <Input type="password" placeholder="confirm new password">
          confirm new password
        </Input>
      </div>

      <ProfileInfo>
        <Input type="text" placeholder="name">
          name
        </Input>
        <Input type="email" placeholder="email">
          email
        </Input>
      </ProfileInfo>
 */
