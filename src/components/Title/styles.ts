import { motion } from "framer-motion";
import styled from "styled-components";
import { Typography, Media } from "ui";

export const StyledTitle = styled(motion.h1)`
  margin-bottom: 40px;

  ${Typography.H1}

  ${Media.SM} {
    margin-bottom: 32px;
  }
`;
