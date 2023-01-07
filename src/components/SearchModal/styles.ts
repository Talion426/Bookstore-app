import styled from "styled-components";
import { Color } from "ui";

export const SearchModalWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 350px;
  z-index: 100;

  background: ${Color.Primary_Background};
  border: 1px solid ${Color.Gray};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 16px 0;

  background: none;
`;
