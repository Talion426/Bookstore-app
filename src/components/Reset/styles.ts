import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledSignUp = styled.form`
  width: 544px;
  padding: 40px 32px;
  margin-bottom: 72px;

  border: 1px solid ${Color.Gray};

  ${Media.MD} {
    width: 450px;
  }
  ${Media.SM} {
    width: 270px;
  }
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

export const Title = styled.p`
  margin-bottom: 32px;

  ${Typography.H3}
`;
