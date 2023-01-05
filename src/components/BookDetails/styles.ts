import styled from "styled-components";
import { Media, Color, Typography } from "ui";

export const StyledBookDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 72px;

  ${Media.LG} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 544px;
  height: 472px;
  padding: 61px 122px;

  background: ${Color.Secondary_Background};

  ${Media.EL} {
    width: 435px;
    height: 378px;
    padding: 30px 80px;
  }
  ${Media.LG} {
    width: 544px;
    height: 472px;
    margin-bottom: 48px;
  }
  ${Media.MD} {
    width: 435px;
    height: 378px;
    padding: 30px 90px;
  }
  ${Media.SM} {
    width: 272px;
    height: 272px;
    padding: 48px 60px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 448px;

  ${Media.EL} {
    width: 400px;
  }
  ${Media.LG} {
    width: 544px;
    padding-top: 20px;

    border-top: 1px solid ${Color.Gray};
  }
  ${Media.MD} {
    width: 100%;
  }
`;

export const AddFavoriteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 16px 16px 12px;

  background: ${Color.Primary};

  ${Media.MD} {
    padding: 12px 12px 8px;
  }
`;

export const Rewiew = styled.a`
  position: relative;
  top: 0;
  left: calc(50% - 60px);

  display: inline-block;

  width: 120px;
  margin-top: 40px;

  ${Typography.B1};
  color: ${Color.Primary};
  text-align: center;
`;
