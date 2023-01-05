import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography, Media } from "ui";

export const StyledErrorPage = styled.section`
  flex: 1 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 72px;

  ${Typography.H1};
  font-size: 140px;

  ${Media.SM}{
    font-size: 80px;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 32px;

  ${Typography.H2};
`;

export const Text = styled.p`
  margin-bottom: 32px;

  ${Typography.H3};
`;

export const ContentWrapper = styled.div`
  margin-bottom: 72px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;

  ${Typography.H3}
  color: ${Color.Primary_Background};

  background: ${Color.Primary};
  border: 1px solid ${Color.Primary};

  transition: all 0.2s ease-out;

  &:hover {
    color: ${Color.White};

    background: ${Color.Primary_Light};
    border: 1px solid ${Color.Primary_Light};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
