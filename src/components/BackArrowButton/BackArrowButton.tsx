import { BackArrowIcon } from "assets";
import { useNavigate } from "react-router";
import { Color } from "ui";
import { StyledArrow } from "./styles";

export const BackArrowButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledArrow onClick={handleBack}>
      <BackArrowIcon fill={Color.Primary} />
    </StyledArrow>
  );
};
