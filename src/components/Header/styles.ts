import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledHeader = styled.header`
  position: relative;
  z-index: 101;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0px;
  margin-bottom: 72px;

  background: ${Color.Primary_Background};
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

export const SearchWrapper = styled.div`
  display: block;

  ${Media.LG} {
    display: none;
  }
`;
