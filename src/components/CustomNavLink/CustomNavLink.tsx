import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE } from "router";

interface IProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomNavLink = ({ children, to }: IProps) => {
  return <NavLink to={to}>{children}</NavLink>;
};
