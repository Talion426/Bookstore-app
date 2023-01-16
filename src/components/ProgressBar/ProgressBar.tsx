import { useScroll } from "framer-motion";
import { StyledProgressBar } from "./styles";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return <StyledProgressBar style={{ scaleX: scrollYProgress }}></StyledProgressBar>;
};
