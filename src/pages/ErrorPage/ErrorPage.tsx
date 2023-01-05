import { ROUTE } from "router";
import { StyledErrorPage, Subtitle, Text, ContentWrapper, Title, Button } from "./styles";

export const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <Title>404</Title>
      <ContentWrapper>
        <Subtitle>Opps! Page not found</Subtitle>
        <Text>Sorry, the page you are looking for does not exist. Please, return HOME</Text>
        <Button to={ROUTE.HOME}>HOME</Button>
      </ContentWrapper>
    </StyledErrorPage>
  );
};
