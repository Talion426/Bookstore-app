import { StyledFooter, FooterText } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      viewport={{ amount: 0.2, once: true }}
    >
      <FooterText>©2022 Bookstore</FooterText>
      <FooterText>All rights reserved</FooterText>
    </StyledFooter>
  );
};
