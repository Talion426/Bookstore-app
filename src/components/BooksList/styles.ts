import styled from "styled-components";
import { Media } from "../../ui";

export const StyledBooksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  justify-content: center;
  margin-bottom: 72px;

  ${Media.LG} {
    grid-template-columns: repeat(2, 328px);
  }
  ${Media.MD} {
    grid-template-columns: 272px;
  }
`;
