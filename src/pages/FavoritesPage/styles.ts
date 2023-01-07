import styled from "styled-components";
import { Media } from "ui";

export const StyledFavoritesPage = styled.div`
  flex: 1 0 auto;

  margin-bottom: 72px;

  ${Media.SM} {
    margin-bottom: 56px;
  }
`;

export const FavoriteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;

  margin-bottom: 72px;
`;
