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
    gap: 24px;
  }
`;

export const NavItem = styled.a`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  ${Media.LG} {
    display: none;
  }
`;

export const ShoppingBagNavItem = styled.a`
  display: block;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }
`;

export const BurgerMenuNavItem = styled.button`
  display: none;

  background: none;

  ${Media.LG} {
    display: block;
  }
`;
