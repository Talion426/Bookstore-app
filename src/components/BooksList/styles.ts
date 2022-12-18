import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { NextArrowIcon, PrevArrowIcon } from "assets";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  justify-content: center;
  margin-bottom: 72px;

  ${Media.LG} {
    grid-template-columns: repeat(2, 328px);
  }
  ${Media.MD} {
    grid-template-columns: 272px;
  }
`;

export const StyledPagination = styled.div`
  .paginate {
    &__container {
      display: flex;
      justify-content: center;
      gap: 32px;

      padding-top: 48px;

      ${Typography.B2}
      color: ${Color.Secondary};

      border-top: 1px solid ${Color.Gray};
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
