import styled from "styled-components";
import { Typography, Color } from "ui";

export const StyledButton = styled.button<{
  buttonWidth?: string;
  buttonColor?: string;
  backgroundColor?: string;
  borderColor?: string;
}>`
  height: 60px;
  width: ${({ buttonWidth }) => buttonWidth || "100%"};

  ${Typography.H3}
  color: ${({ buttonColor }) => buttonColor || Color.Primary_Background};

  background: ${({ backgroundColor }) => backgroundColor || Color.Primary};
  border: ${({ borderColor }) => `1px solid ${borderColor}` || `1px solid ${Color.Primary}`};

  transition: all 0.2s ease-out;

  cursor: pointer;

  &:hover {
    color: ${Color.White};

    background: ${Color.Primary_Light};
    border: 2px solid ${Color.Primary_Light};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
