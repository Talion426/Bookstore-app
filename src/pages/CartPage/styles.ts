import styled from "styled-components";
import { Media } from "ui";

export const StyledCartPage = styled.section`
  flex: 1 0 auto;

  margin-bottom: 72px;

  ${Media.SM} {
    margin-bottom: 56px;
  }
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
