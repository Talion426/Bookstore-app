import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledFavoriteItem = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  gap: 32px;

  padding-bottom: 48px;

  border-bottom: 1px solid ${Color.Gray};

  ${Media.MD} {
    flex-direction: column;
  }
  ${Media.SM} {
    margin-bottom: 24px;
    padding: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 256px;
  height: 192px;
  padding: 1px 46px;

  background-color: ${Color.Secondary_Background};
  border-radius: 20px;

  ${Media.LG} {
    width: 208px;
    height: 156px;
    padding: 1px 37px;
  }
  ${Media.MD} {
    position: relative;

    width: 352px;
    height: 264px;
  }
  ${Media.SM} {
    width: 272px;
    height: 204px;
    margin-bottom: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  flex: 1 0 auto;

  ${Media.LG} {
    padding-right: 56px;
    flex: 1 1 auto;
  }
  ${Media.MD} {
    padding-right: 0;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 8px;

  ${Typography.H3};
`;

export const Subtitle = styled.p`
  margin-bottom: 24px;

  ${Typography.B1};
  color: ${Color.Secondary};
`;

export const Popularity = styled.div`
  display: flex;
  align-items: center;
  gap: 188px;

  ${Media.LG} {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const Price = styled.p`
  ${Typography.H3};
`;

export const HeartButton = styled.button`
  position: absolute;
  top: calc(50% - 56px);
  right: 0;

  display: block;
  width: 56px;
  height: 56px;

  background: none;

  svg {
    fill: ${Color.Red};

    path {
      stroke: ${Color.Red};
    }
  }

  ${Media.LG} {
    top: 0;
    right: 0;
  }
  ${Media.MD} {
    background: ${Color.Primary};
    border-radius: 20px;
  }
`;
