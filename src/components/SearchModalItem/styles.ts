import styled from "styled-components";
import { Color, Typography } from "ui";

export const SearchModalItemWrapper = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px;

  border-bottom: 1px solid ${Color.Gray};
`;

export const ImageWrapper = styled.div`
  width: 80px;
  height: 60px;
  padding: 0 14px;

  background-color: ${Color.Secondary_Background};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  ${Typography.B1}
  color: ${Color.Primary};
`;
