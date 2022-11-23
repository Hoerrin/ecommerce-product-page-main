import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1024px) {
    font-size: 0.7rem;
    margin: 0.2rem 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/Hoerrin" target="_blank" rel="noreferrer">
        Patryk Dworakowski
      </a>
      .
    </FooterContainer>
  );
}

export default Footer;
