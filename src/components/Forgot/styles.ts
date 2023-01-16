import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledForgot = styled(motion.form)`
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

  margin-bottom: 40px;
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

export const CompleteMessage = styled.p`
  width: 100%;
  padding: 20px;
  margin-bottom: 32px;

  ${Typography.B1}

  overflow: hidden;

  background: ${Color.Secondary_Background};

  span {
    ${Typography.B2}
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;

  ${Typography.H3}
  color: ${Color.Primary_Background};

  background: ${Color.Primary};
  border: 1px solid ${Color.Primary};

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
