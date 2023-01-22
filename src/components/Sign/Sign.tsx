import { SignIn, SignUp } from "components";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { SignItem, SignNavigation, StyledSign } from "./styles";

export const Sign = () => {
  const [isSign, setSign] = useState(true);

  const handleSignIn = () => {
    setSign(true);
  };

  const handleSignUp = () => {
    setSign(false);
  };

  return (
    <AnimateSharedLayout>
      <StyledSign
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <SignNavigation layout>
          <SignItem onClick={handleSignIn} activeColor={isSign} activeBorder={isSign}>
            Sign in
          </SignItem>
          <SignItem onClick={handleSignUp} activeColor={!isSign} activeBorder={!isSign}>
            Sign up
          </SignItem>
        </SignNavigation>
        <AnimatePresence initial={false}>{isSign ? <SignIn /> : <SignUp />}</AnimatePresence>
      </StyledSign>
    </AnimateSharedLayout>
  );
};
