import styled from "styled-components";
import { Color, Typography } from "../../ui";

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 0 25px;

  background: ${Color.Primary_Background};

  transform: translateX(100%);

  transition: transform 0.3s ease-in-out;
`;

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  margin-top: 136px;
`;
export const Link = styled.a`
  width: 100%;
  margin-top: 36px;
  padding: 10px 0;

  ${Typography.H1}
  text-align: center;
`;

export const Button = styled.button`
  display: block;

  width: 100%;
  padding: 16px 24px;
  margin: 0 0 32px 0;

  ${Typography.H3}
  color: ${Color.Primary_Background};

  background: ${Color.Primary};
`;
