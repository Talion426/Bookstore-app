import { Footer, Header } from "components";
import { Outlet } from "react-router-dom";
import { Wrapper } from "ui";
//import { OutletWrapper } from "./styles";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      {/*<OutletWrapper>*/}
      <Outlet />
      {/*</OutletWrapper>*/}
      <Footer />
    </Wrapper>
  );
};
