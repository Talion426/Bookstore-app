import { Portal } from "components";
import { TargetPortal } from "ui";
import { FaCheck } from "react-icons/fa";
import { IconWrapper, StyledNotice, Text } from "./styles";
import { AnimatePresence } from "framer-motion";

interface IProps {
  children: string;
}

export const Notice = ({ children }: IProps) => {
  return (
    <Portal target={TargetPortal.NOTICE}>
      <AnimatePresence>
        <StyledNotice
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <IconWrapper>
            <FaCheck />
          </IconWrapper>
          <Text>{children}</Text>
        </StyledNotice>
      </AnimatePresence>
    </Portal>
  );
};
