import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledNotice = styled.div`
  position: fixed;
  top: 150px;
  right: 150px;

  display: flex;
  align-items: center;

  padding: 8px 24px 8px 8px;

  background: ${Color.Secondary_Background};
  border: 2px solid ${Color.Primary_Background};
  border-radius: 20px;
  box-shadow: 1px 1px 5px ${Color.Secondary_Background};

  ${Media.EL} {
    top: 130px;
    right: 50px;
  }
  ${Media.LG} {
    top: 100px;
    right: 30px;
  }
  ${Media.MD} {
    padding: 5px 15px 5px 5px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  padding: 5px 5px 2px;

  background: ${Color.Primary_Background};
  border-radius: 50%;
`;

export const Text = styled.p`
  max-width: 250px;

  ${Typography.B1}

  ${Media.MD} {
    max-width: 140px;
  }
`;
