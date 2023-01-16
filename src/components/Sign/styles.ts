import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledSign = styled.div`
  max-width: 544px;
  margin: 0 auto 72px auto;

  border: 1px solid ${Color.Gray};
`;

export const SignNavigation = styled.div`
  display: flex;
  justify-content: center;

  height: 70px;
  padding: 0 32px;
  margin-bottom: 32px;

  border-bottom: 1px solid ${Color.Gray};
`;

export const SignItem = styled.button<{ activeColor?: boolean; activeBorder?: boolean }>`
  width: 50%;

  ${Typography.H3};
  color: ${({ activeColor }) => (activeColor ? Color.Primary : Color.Secondary)};

  background: none;
  border-bottom: ${({ activeBorder }) =>
    activeBorder ? `2px solid ${Color.Primary}` : `2px solid ${Color.Primary_Background}`};
`;
