import styled from "styled-components";
import { Color, Media } from "ui";

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
    position: absolute;
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
