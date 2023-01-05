import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;

  ${Typography.B2};
  color: ${Color.Primary};
`;

export const StyledInput = styled.input`
  max-width: 544px;
  height: 56px;
  padding: 10px 20px;
  margin-bottom: 20px;

  ${Typography.B1}

  background: ${Color.Primary_Background};
  border: 1px solid ${Color.Gray};

  &::placeholder {
    color: ${Color.Secondary};
  }

  &:focus {
    border: 2px solid ${Color.Gray};
  }

  ${Media.EL} {
    max-width: 456px;
  }
`;
