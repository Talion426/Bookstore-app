import { Account, BackArrowButton, Title } from "components";
import { getUser, useAppSelector } from "store";
import { StyledAccount } from "./styles";

export const AccountPage = () => {
  const { name, email, password } = useAppSelector(getUser);

  return (
    <StyledAccount>
      <BackArrowButton />
      <Title text="Account" />
      <Account name={name} email={email} password={password} />
    </StyledAccount>
  );
};
