import styled from "styled-components";
import { Color, Typography } from "ui";

export const SearchModalWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: calc(50% - 262px);
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

  ${Typography.B1}

  background: none;
`;
