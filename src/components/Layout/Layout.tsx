import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { Wrapper } from "ui";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};
