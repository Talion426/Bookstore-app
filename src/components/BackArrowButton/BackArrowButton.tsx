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
    <StyledArrow
      onClick={handleBack}
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackArrowIcon fill={Color.Primary} />
    </StyledArrow>
  );
};
