import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledHeaderControl = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;

  max-width: 900px;

  background-color: ${Color.Primary_Background};

  ${Media.EL} {
    max-width: 750px;
  }
  ${Media.LG} {
    position: fixed;
    top: 0;
    left: 0;

    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;

    max-width: none;
    width: 100%;
    height: calc(100% - 82px);
    margin-top: 82px;
    padding: 56px 40px;

    transform: ${({ isOpen }) => (isOpen ? "translateX(0%)" : "translateX(100%)")};

    transition: transform 0.3s ease-in-out;
  }
`;

export const ButtonWrapper = styled.div`
  flex: 1 0 auto;

  width: 100%;
`;
export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 45px;
  width: 100px;
  border-radius: 20px;

  ${Typography.H3}
  color: ${Color.Primary_Background};

  background: ${Color.Primary};
  border: 1px solid ${Color.Primary};

  transition: all 0.2s ease-out;

  cursor: pointer;

  &:hover {
    color: ${Color.White};

    background: ${Color.Primary_Light};
    border: 2px solid ${Color.Primary_Light};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  ${Media.LG} {
    height: 60px;
    width: 100%;
    border-radius: 0;
  }
`;
