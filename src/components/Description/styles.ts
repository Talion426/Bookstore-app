import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PriceBlock = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  ${Typography.H2}

  ${Media.LG} {
    flex-direction: column;
  }
  ${Media.MD} {
    flex-direction: row;
  }
  ${Media.SM} {
    flex-direction: column;
  }
`;

export const DescriptionItem = styled.li`
  display: flex;
  justify-content: space-between;

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
