import { Form, Input, Button, StyledMailing, SubTitle, Title } from "./styles";

export const Mailing = () => {
  return (
    <StyledMailing>
      <Title>Subscribe to Newsletter</Title>
      <SubTitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </SubTitle>
      <Form>
        <Input type="email" placeholder="Your email" />
        <Button>Subscribe</Button>
      </Form>
    </StyledMailing>
  );
};
