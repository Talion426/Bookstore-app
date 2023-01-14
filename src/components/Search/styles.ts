import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const SearchWrapper = styled.form`
  position: relative;

  ${Media.LG} {
    width: 100%;
  }
`;

export const StyledSearch = styled.input`
  width: 542px;
  height: 56px;
  padding: 15px 75px 15px 20px;

  ${Typography.B1}

  background: ${Color.Primary_Background};
  border: 1px solid ${Color.Gray};

  &::placeholder {
    color: ${Color.Secondary};
  }

  ${Media.EL} {
    width: 480px;
  }
  ${Media.LG} {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 1px;
  right: 0;

  padding: 14px 23px 13px;

  background: none;

  svg {
    path {
      fill: ${Color.Primary};
    }
  }
`;
