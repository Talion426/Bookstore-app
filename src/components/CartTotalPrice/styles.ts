import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledCartTotalPrice = styled.div`
  position: relative;
  top: 0;
  left: calc(100% - 256px);

  max-width: 256px;
  margin: 48px 0 72px;

  ${Media.LG} {
    left: calc(100% - 328px);

    max-width: 328px;
  }
  ${Media.MD} {
    left: calc(50% - 164px);
  }
  ${Media.SM} {
    left: 0;

    max-width: none;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const PriceTitle = styled.p`
  ${Typography.B1}
  color: ${Color.Secondary};
`;

export const Price = styled.p`
  ${Typography.B1}
`;

export const TotalTitle = styled.p`
  ${Typography.H2}
`;
