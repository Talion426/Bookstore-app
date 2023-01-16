import axios from "axios";
import { Button } from "components";
import { useForm } from "react-hook-form";
import { Form, Input, StyledMailing, SubTitle, Title, ErrorMessage } from "./styles";

interface IMailing {
  email: string;
}

export const Mailing = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: IMailing) => {
    await axios.post("https://63b08824f9a53fa2026b2d9a.mockapi.io/users", {
      email: data.email,
    });
    reset();
  };

  const mailingVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <StyledMailing
      variants={mailingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {isSubmitSuccessful ? (
        <Title>Thanks for subscribing to us!</Title>
      ) : (
        <>
          <Title>Subscribe to Newsletter</Title>
          <SubTitle>
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
          </SubTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              autoComplete="off"
              {...register("email", {
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Enter the correct email!",
                },
                required: "Email is required field!",
              })}
              placeholder="Your email"
              type="text"
            />
            <Button type="submit">Subscribe</Button>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </Form>
        </>
      )}
    </StyledMailing>
  );
};
