import { Footer, Header, ProgressBar } from "components";
import { Outlet } from "react-router-dom";
import { Wrapper } from "ui";

export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};
