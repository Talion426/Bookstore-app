import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledPagination = styled(motion.div)`
  .paginate {
    &__container {
      display: flex;
      justify-content: center;
      gap: 32px;

      padding-top: 48px;

      ${Typography.B2}
      color: ${Color.Secondary};

      border-top: 1px solid ${Color.Gray};

      ${Media.MD} {
        gap: 20px;
      }
    }
    &__break,
    &__page {
      cursor: pointer;
    }
    &__active {
      color: ${Color.Primary};
    }
    &__previous {
      margin-right: auto;
    }
    &__next {
      margin-left: auto;
    }
    &__previous,
    &__next {
      color: ${Color.Primary};

      cursor: pointer;
    }
    &__disabled {
      color: ${Color.Secondary};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  ${Typography.B2}

  background: none;

  ${Media.SM} {
    span {
      display: none;
    }
  }
`;
