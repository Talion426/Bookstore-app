import { SignIn, SignUp } from "components";
import { useState } from "react";
import { SignItem, SignNavigation, StyledSign } from "./styles";

export const Sign = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignOn = () => {
    setIsSignIn(true);
  };

  const handleSignIn = () => {
    setIsSignIn(false);
  };

  return (
    <StyledSign>
      <SignNavigation>
        <SignItem onClick={handleSignOn} activeColor={isSignIn} activeBorder={isSignIn}>
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
