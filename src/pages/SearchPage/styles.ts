import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Typography } from "ui";

export const SearchBooksWrapper = styled.section`
  flex: 1 0 auto;

  margin-bottom: 72px;
`;

export const Subtitle = styled(motion.p)`
  margin-bottom: 48px;
  ${Typography.B1};
  color: ${Color.Secondary};
`;
