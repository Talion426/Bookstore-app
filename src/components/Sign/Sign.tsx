import { SignIn, SignUp } from "components";
import { useState } from "react";
import { SignItem, SignNavigation, StyledSign } from "./styles";

export const Sign = () => {
  const [isSignIn, setSign] = useState(true);

  const handleSignUp = () => {
    setSign(true);
  };

  const handleSignIn = () => {
    setSign(false);
  };

  return (
    <StyledSign>
      <SignNavigation>
        <SignItem onClick={handleSignUp} activeColor={isSignIn} activeBorder={isSignIn}>
          Sign in
        </SignItem>
        <SignItem onClick={handleSignIn} activeColor={!isSignIn} activeBorder={!isSignIn}>
          Sign up
        </SignItem>
      </SignNavigation>
      {isSignIn ? <SignIn /> : <SignUp />}
    </StyledSign>
  );
};
