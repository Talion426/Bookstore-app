import styled from "styled-components";
import { Typography, Color } from "ui";

export const StyledSignUp = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0px 32px 32px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 56px;
  padding: 10px 20px;
  margin-bottom: 5px;

  ${Typography.B1}

  background: ${Color.Primary_Background};
  border: 1px solid ${Color.Gray};

  &::placeholder {
    color: ${Color.Secondary};
    text-transform: capitalize;
  }
`;

export const Label = styled.label`
  padding-bottom: 10px;

  ${Typography.B2};
  color: ${Color.Primary};
`;

export const ErrorMessage = styled.p`
  margin-bottom: 10px;

  ${Typography.B1}
  color: ${Color.Red};
`;
