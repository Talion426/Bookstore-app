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

  transition: all 0.1s ease-in-out;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  ${Media.LG} {
    width: 100%;
    padding: 10px 0;
  }
`;

export const ShoppingBagNavItem = styled(NavLink)`
  position: relative;

  display: block;

  transition: all 0.1s ease-in-out;

  svg {
    path {
      stroke: ${Color.Primary};
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  ${Media.LG} {
    width: 100%;
    padding: 15px 0;
  }
`;

export const Text = styled.p`
  ${Typography.H2}
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const Amount = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;

  ${Typography.S1}
  font-size: 14px;

  background: ${Color.Secondary_Background};
  border-radius: 10px;
`;
