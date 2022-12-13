import styled from "styled-components";
import { Color } from "../../ui";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0px;
  margin-bottom: 72px;

  border-bottom: 1px solid ${Color.Gray};
`;

export const LogoWrapper = styled.a`
  display: block;

  svg {
    path {
      fill: ${Color.Primary};
    }
  }
`;
