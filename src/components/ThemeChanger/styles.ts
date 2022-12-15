import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledThemeChanger = styled.input`
  position: relative;

  width: 56px;
  height: 30px;

  background: ${Color.Blue};
  border-radius: 50px;
  appearance: none;

  cursor: pointer;

  &::before {
    content: "";

    position: absolute;
    z-index: 2;
    top: 3px;
    left: 3px;

    display: block;

    width: 24px;
    height: 24px;

    background: ${Color.Light};
    border-radius: 50%;

    transition: all 0.2s ease-in-out;
  }

  &:checked {
    background-color: ${Color.Red};

    &::before {
      content: "";

      left: 28px;

      background: ${Color.Light};
    }
  }

  ${Media.LG} {
    display: none;
  }
`;
