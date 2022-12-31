import styled from "styled-components";
import { Color, Typography, Media } from "ui";

export const StyledMailing = styled.section`
  padding: 56px 64px;
  margin-bottom: 72px;

  background-color: ${Color.Secondary_Background};
  border-radius: 20px;

  ${Media.MD} {
    padding: 40px;
  }
  ${Media.SM} {
    padding: 24px;
  }
`;

export const Form = styled.form`
  position: relative;

  display: grid;
  grid-template-columns: 4fr 1fr;

  ${Media.MD} {
    grid-template-columns: 3fr 1fr;
  }
  ${Media.SM} {
    grid-template-columns: 100%;
    height: none;
    row-gap: 24px;
  }
`;

export const Input = styled.input`
  padding: 16px 24px;

  ${Typography.B1};

  background: ${Color.Primary_Background};
`;

export const Title = styled.h2`
  max-width: 500px;

  margin-bottom: 8px;

  ${Typography.H2};
`;

export const SubTitle = styled.p`
  max-width: 500px;
  margin-bottom: 32px;

  ${Typography.B1};

  ${Media.SM} {
    max-width: 300px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -30px;
  left: 0;

  ${Typography.B1}
  color: ${Color.Red};
`;
