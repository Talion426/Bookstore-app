import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

export const StyledProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 105;

  height: 10px;

  background: ${Color.Secondary_Background};
  transform-origin: 0%;
`;
