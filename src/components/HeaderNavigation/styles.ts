import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Media, Color } from "ui";

export const StyledNav = styled.nav`
  display: flex;
  gap: 40px;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  ${Media.LG} {
    display: none;
    gap: 24px;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }
`;

export const ShoppingBagNavItem = styled(NavLink)`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }
`;
