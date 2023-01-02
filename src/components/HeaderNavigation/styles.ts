import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Media, Color, Typography } from "ui";

export const StyledNav = styled.nav`
  display: flex;
  gap: 40px;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  ${Media.LG} {
    flex-direction: column;
    gap: 0px;

    width: 100%;

    text-align: center;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  ${Media.LG} {
    width: 100%;
    padding: 10px 0;
  }
`;

export const ShoppingBagNavItem = styled(NavLink)`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  ${Media.LG} {
    width: 100%;
    padding: 15px 0;
  }
`;

export const Text = styled.p`
  ${Typography.H2}
`;
