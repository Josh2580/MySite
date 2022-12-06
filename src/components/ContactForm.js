import React from "react";
// import { motion } from "framer-motion";
import AddressIcon from "../img/LocationIcon.png";
import CallIcon from "../img/phoneIcon.jpeg";
import IconEmail from "../img/IconMail.png";

import FormComp from "./form";
//styles
import {
  Contact,
  ContactFormCard,
  MeetUsCard,
  ContactCardLeft,
  ContactCardRight,
} from "../styles/ContactForm.style";

const ContactForm = () => {
  return (
    <Contact id="contact">
      <h2>Contact</h2>
      <ContactFormCard>
        <ContactCardLeft>
          <MeetUsCard>
            <img src={AddressIcon} alt="Address Icon" />
            <h3>Our Adress</h3>
            <p>No. 2 Mike Abeh cresent, Oppo Police Station, New Nyanya.</p>
          </MeetUsCard>
          <MeetUsCard>
            <img src={IconEmail} alt="Email Icon" />
            <h3>Email</h3>
            <p>Jochuks10@gmail.com</p>
          </MeetUsCard>
          <MeetUsCard>
            <img src={CallIcon} alt="Call Icon" />
            <h3>Call</h3>
            <p>
              +2349038348397 <br /> +2347065704850
            </p>
          </MeetUsCard>
        </ContactCardLeft>
        <ContactCardRight>
          <FormComp />
        </ContactCardRight>
      </ContactFormCard>
    </Contact>
  );
};

export default ContactForm;
