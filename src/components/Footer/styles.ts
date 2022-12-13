import styled from "styled-components";
import { Typography, Color, Media } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 30px 0px;

  border-top: 1px solid ${Color.Gray};

  ${Media.SM} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterText = styled.p`
  ${Typography.B1}
  color: ${Color.Secondary};

  ${Media.SM} {
    margin-bottom: 24px;
  }
`;
