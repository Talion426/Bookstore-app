import styled from "styled-components";
import { Typography, Color } from "ui";

export const StyledDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PriceBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

export const Price = styled.p`
  ${Typography.H2}
`;

export const DescriptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 50px;

  ${Typography.B1};

  &:last-child {
    margin-bottom: 60px;
  }
`;

export const DescriptionTitle = styled.span`
  ${Typography.B1};
  color: ${Color.Primary};
`;

export const Text = styled.span`
  ${Typography.B1};
  color: ${Color.Secondary};
`;
