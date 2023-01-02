import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { getUser, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUser);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN} />;
};
