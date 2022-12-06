import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Button } from "../styles/Button.style";

const FormComp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iygmfpb",
        "template_7otzy8y",
        form.current,
        "__VX_pxa_16sfWwzn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <FormStyle>
      <form ref={form} onSubmit={sendEmail}>
        <Inputs>
          <input
            className="inputClass"
            type="text"
            name="user_name"
            id="username"
            placeholder="Your Name"
            maxLength="30"
            minLength="3"
            required
          />
          <input
            className="inputClass"
            type="email"
            id="email"
            name="user_email"
            placeholder="Your Email"
            maxLength="30"
            minLength="6"
            required
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            name="subject"
            className="inputClass"
          />
        </Inputs>
        <textarea
          name="message"
          id="message"
          cols="100%"
          rows="8"
          placeholder="Message"
          className="inputClass"
        ></textarea>
        <ButtonStyle>
          <Button BG="#1890e0" type="submit">
            Send Message
          </Button>
        </ButtonStyle>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  box-sizing: border-box;
  /* background: white; */
  padding: 1.5rem;
  #message {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 1.5rem 0rem;
    font-size: 1rem;
    padding: 1rem;
    outline-width: 0px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inputClass {
    border: 1px solid #ccd0d4;
  }
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  input {
    outline-width: 0px;
    font-size: 1rem;
    padding: 0.7rem;
  }
  #subject {
    grid-column: 1/3;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  @media (max-width: 916px) {
    justify-content: center;
  }
`;

export default FormComp;
