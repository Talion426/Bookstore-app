import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography, Color, Media } from "ui";

export const StyledCartItem = styled(motion.li)`
  position: relative;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 32px;

  padding-bottom: 48px;

  border-bottom: 1px solid ${Color.Gray};

  ${Media.MD} {
    flex-direction: column;

    max-width: 420px;
    margin: 0 auto;
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
    flex: 1 1 auto;

    max-width: 420px;
  }
  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

export const Title = styled(Link)`
  margin-bottom: 8px;

  ${Typography.H3};
`;

export const Subtitle = styled.p`
  max-width: 520px;
  margin-bottom: 24px;

  ${Typography.B1};
  color: ${Color.Secondary};

  ${Media.EL} {
    max-width: 400px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 56px;
  height: 56px;

  background: none;

  svg {
    fill: ${Color.Primary};
  }

  &:disabled {
    svg {
      fill: ${Color.Secondary};
    }
  }
`;

export const Counter = styled.span`
  display: block;

  ${Typography.H3}
`;

export const Price = styled.p`
  margin-right: 140px;
  ${Typography.H2};

  ${Media.EL} {
    margin-right: 90px;
  }
  ${Media.LG} {
    position: absolute;
    bottom: 42px;
    right: 0;

    margin-right: 0;
  }
  ${Media.MD} {
    bottom: 68px;
  }
  ${Media.SM} {
    bottom: 30px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: calc(50% - 56px);
  right: 0;

  display: block;
  width: 56px;
  height: 56px;

  background: none;

  svg {
    path {
      fill: ${Color.Primary};
    }
  }

  ${Media.LG} {
    top: 0;
    right: 0;
  }
  ${Media.MD} {
    background: ${Color.Primary};
    border-radius: 20px;

    svg {
      path {
        fill: ${Color.Primary_Background};
      }
    }
  }
`;
