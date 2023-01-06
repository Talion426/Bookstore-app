import { Portal } from "components";
import { TargetPortal } from "ui";
import { FaCheck } from "react-icons/fa";
import { IconWrapper, StyledNotice, Text } from "./styles";

interface IProps {
  children: string;
}

export const Notice = ({ children }: IProps) => {
  return (
    <Portal target={TargetPortal.NOTICE}>
      <StyledNotice>
        <IconWrapper>
          <FaCheck />
        </IconWrapper>
        <Text>{children}</Text>
      </StyledNotice>
    </Portal>
  );
};
