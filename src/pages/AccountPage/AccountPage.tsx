import { Account, BackArrowButton, Title } from "components";
import { StyledAccount } from "./styles";

export const AccountPage = () => {
  return (
    <StyledAccount>
      <BackArrowButton />
      <Title text="Account" />
      <Account />
    </StyledAccount>
  );
};
