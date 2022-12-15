import styled from "styled-components";
import { Color, Typography, Media } from "ui";

export const BooksListItem = styled.figure`
  display: flex;
  flex-direction: column;

  height: 454px;
  max-width: 352px;

  border: 2px solid ${Color.Secondary_Background};
  border-radius: 20px;

  cursor: pointer;

  ${Media.EL} {
    height: 405px;
  }
  ${Media.LG} {
    height: 454px;
    max-width: 328px;
  }
  ${Media.MD} {
    height: 394px;
    max-width: 272px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  max-width: 352px;
  height: 264px;
  margin-bottom: 20px;
  padding: 1px 63px;

  background-color: ${Color.Secondary_Background};
  border-radius: 20px;

  ${Media.EL} {
    height: 215px;
  }
  ${Media.LG} {
    height: 264px;
    max-width: 328px;
  }
  ${Media.MD} {
    height: 204px;
    max-width: 272px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  height: 170px;
  padding: 0 5px;
`;

export const Title = styled.h3`
  height: 64px;
  margin-bottom: 8px;

  ${Typography.H3};
  text-decoration: none;
`;

export const Subtitle = styled.p`
  height: 48px;
  margin-bottom: 16px;

  ${Typography.B1};
  color: ${Color.Primary};
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 34px;
`;

export const Price = styled.span`
  padding-left: 5px;

  ${Typography.H3}
`;
