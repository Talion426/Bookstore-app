import { css } from "styled-components";
import { Color } from "./colors";

const H1 = css`
  font-family: "Bebas Neue";
  font-weight: 500;
  font-size: 56px;
  line-height: 64px;
  color: ${Color.Primary};

  @media (max-width: 575px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  color: ${Color.Primary};

  @media (max-width: 575px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-family: "Bebas Neue";
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: ${Color.Primary};
`;

const S1 = css`
  font-family: "Bebas Neue";
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${Color.Primary};
`;

const B1 = css`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Color.Primary};
`;

const B2 = css`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${Color.Primary};
`;

export const Typography = {
  H1: H1,
  H2: H2,
  H3: H3,
  S1: S1,
  B1: B1,
  B2: B2,
};
