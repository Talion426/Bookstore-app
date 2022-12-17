import styled from "styled-components";
import { Typography, Color } from "ui";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;

  ${Typography.B2};
  color: ${Color.Primary};
`;

export const StyledInput = styled.input<{
  inputWidth?: string;
}>`
  height: 56px;
  width: ${({ inputWidth }) => inputWidth || "100%"};
  padding: 10px 20px;
  margin-bottom: 20px;

  border: 1px solid ${Color.Gray};

  &::placeholder {
    color: ${Color.Secondary};
  }
`;
