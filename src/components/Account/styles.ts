import styled from "styled-components";
import { Color, Typography } from "ui";

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
  margin-bottom: 48px;
`;

export const PasswordWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 16px;
  ${Typography.H2}
  color: ${Color.Primary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 30px;
  padding-top: 48px;
  margin: 72px 0;
  border-top: 1px solid ${Color.Gray};
`;
