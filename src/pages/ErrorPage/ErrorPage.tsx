import { ROUTE } from "router";
import { StyledErrorPage, Subtitle, Text, ContentWrapper, Title, Button } from "./styles";

export const ErrorPage = () => {
  const textVariants = {
    visible: (i: number) => {
      const delay = 0.1 + i * 0.1;
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.3,
        },
      };
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <StyledErrorPage variants={textVariants} initial="hidden" animate="visible" custom={1}>
      <Title variants={textVariants} initial="hidden" animate="visible" custom={2}>
        404
      </Title>
      <ContentWrapper>
        <Subtitle variants={textVariants} initial="hidden" animate="visible" custom={3}>
          Opps! Page not found
        </Subtitle>
        <Text variants={textVariants} initial="hidden" animate="visible" custom={4}>
          Sorry, the page you are looking for does not exist. Please, return HOME
        </Text>
        <Button to={ROUTE.HOME}>HOME</Button>
      </ContentWrapper>
    </StyledErrorPage>
  );
};
