import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledDetailsSlider = styled.section`
  position: relative;

  margin-bottom: 72px;

  .slick-prev {
    top: -80px;
    left: calc(100% - 80px);

    width: 34px;
    height: 34px;
    padding: 5px;
  }
  .slick-next {
    top: -80px;
    right: 0;

    width: 34px;
    height: 34px;
    padding: 5px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 48px;
  ${Typography.H2}
`;
