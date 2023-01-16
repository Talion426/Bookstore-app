import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Typography, Media } from "ui";

export const StyledAccount = styled.form`
  flex: 1 0 auto;
`;

export const ProfileWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;

  margin-bottom: 48px;

  ${Media.MD} {
    grid-template-columns: 1fr;
  }
`;

export const PasswordWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1fr);
  column-gap: 32px;
`;

export const NewPasswordWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;

  ${Media.MD} {
    grid-template-columns: 1fr;
  }
`;

export const Subtitle = styled(motion.h3)`
  margin-bottom: 16px;

  ${Typography.H2}
  color: ${Color.Primary};
`;

export const ButtonsWrapper = styled(motion.div)`
  display: flex;
  justify-content: end;
  gap: 30px;

  padding-top: 48px;
  margin: 72px 0;

  border-top: 1px solid ${Color.Gray};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  max-width: 544px;
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

  ${Media.EL} {
    max-width: 456px;
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
