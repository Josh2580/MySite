import React from "react";
import styled from "styled-components";
import {
  Resumes,
  Profile,
  Education,
  Experience,
  EduExp,
} from "../styles/Resume.style";
import { ResponsiveStyle } from "../styles/Responsive.style";

const Resume = () => {
  return (
    <Resumes>
      <ResponsiveStyle>
        <Profile>
          <h2>Resume</h2>
          <p>
            I am a Full Stack Developer with proficient knowledge of frontend
            development and backend api synchronization. I am a self-thought
            developer with proper guidance from professional developers like
            DevEd, Youtube and Doc files. I’ve had an experience in working with
            FixUp Professionals.
          </p>
        </Profile>
        <EduExp>
          <Education>
            <h2>Education</h2>
            <h3>B.eng in Computer Engineering</h3>
            <span>Oct 2015 – Jun 2021</span>
            <i>Michael Okpara University, Umuahia</i>
            <p>
              I studied Computer Engineering, my project topic was Gas Detection
              System which include implementation of hardware components and
              software codes.
            </p>
            <h3>Diploma in Computer Information Technology</h3>
            <span>Feb 2015 – Jul 2015</span>
            <i>Uniquemori Institute, Abuja</i>
            <p>
              I studied the fundermentals and basics of data science, word
              spreadsheat, and graphic Design
            </p>
          </Education>
          <Experience>
            <h2>Experience</h2>
            <h3>WordPress Junior Developer</h3>
            <span>June 2019</span>
            <i>FixUp Professionals, Abuja</i>
            <ul>
              <li>I function as a junior developer in the organization.</li>
              <br />
              <li>Working with other team members to achieve a common goal.</li>
            </ul>
          </Experience>
        </EduExp>
      </ResponsiveStyle>
    </Resumes>
  );
};

export default Resume;
