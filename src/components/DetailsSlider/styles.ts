import { motion } from "framer-motion";
import styled from "styled-components";
import { Typography, Media } from "ui";

export const StyledDetailsSlider = styled(motion.section)`
  position: relative;

  margin-bottom: 72px;

  .slick-prev {
    top: -80px;
    left: calc(100% - 80px);

    width: 34px;
    height: 34px;
    padding: 5px;

    ${Media.SM} {
      top: -68px;
    }
  }
  .slick-next {
    top: -80px;
    right: 0;

    width: 34px;
    height: 34px;
    padding: 5px;

    ${Media.SM} {
      top: -68px;
    }
  }
`;
export const Title = styled.h2`
  margin-bottom: 48px;
  ${Typography.H2}
`;
