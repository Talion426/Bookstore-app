import styled, { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";
import { ResetCSS } from "./resetCSS";
import { DarkTheme, LightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Bebas+Neue:regular);
  @import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700);

  ${ResetCSS}

  html[theme="dark"]{
    ${DarkTheme}
  }

  html[theme="light"]{
    ${LightTheme}
  }

  body {
    color: ${Color.Primary};
    background-color: ${Color.Primary_Background};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 40px;

  ${Media.EL} {
    max-width: 1024px;
  }
  ${Media.MD} {
    max-width: none;
  }
  ${Media.SM} {
    padding: 0px 24px;
  }
`;
