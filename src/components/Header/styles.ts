import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  padding: 24px 0px;
  margin-bottom: 72px;

  background: ${Color.Primary_Background};
  border-bottom: 1px solid ${Color.Gray};
`;

export const LogoWrapper = styled(NavLink)`
  position: relative;
  z-index: 11;

  display: block;

  svg {
    path {
      fill: ${Color.Primary};
    }
  }
`;

export const BurgerMenuNavItem = styled.button`
  position: relative;
  z-index: 11;

  background: none;
`;
