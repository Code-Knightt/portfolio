import React from "react";
import styled from "styled-components";
import { center } from "../../mixins";

import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Tag } from "../../assets/tag.svg";

function Contact() {
  return (
    <Background id="contact">
      <Bgtext>
        <h1>
          Con
          <br />
          nect
        </h1>
      </Bgtext>
      <Div>
        <h2 className="title">Connect with Me.</h2>
        <p>Email:</p>
        <a href="mailto:bhagyapatel50125@gmail.com">
          <h3>bhagyapatel50125@gmail.com</h3>
        </a>
        <p>Phone:</p>
        <a href="tel:+919099883077">
          <h3>
            <span className="code">+91</span>&nbsp;&nbsp;9099883077
          </h3>
        </a>
        <p>Located:</p>
        <h3>Surat, Gujarat, India</h3>
        <p>Github:</p>
        <a
          href="https://github.com/Code-Knightt"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Code-Knightt</h3>
        </a>
        <p>Socials:</p>
        <Socials>
          <a
            href="https://www.linkedin.com/in/bhagya-patel-799040216/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/maybe_its_bhagya/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/Bpatel50125"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </Socials>
      </Div>
      <PictureDiv>
        <div className="container">
          <img
            src="Website_profile.webp"
            alt="Profile picture"
            className="profile"
          />
          <Tag className="tag" />
        </div>
      </PictureDiv>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  background-color: var(--red);
  min-height: 70vh;
  z-index: 1;
  position: relative;
  padding: 3rem 0;
  overflow: hidden;
`;

const PictureDiv = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  width: 50%;

  @media (max-width: 795px) {
    position: relative;
    width: 100%;
    top: 0;
    left: 5%;
  }

  .container {
    width: 60%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 795px) {
      margin: 0;
      width: 40%;
    }
    @media (max-width: 595px) {
      width: 60%;
    }

    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2rem;
      left: 0;
      top: 98.5%;
      background-color: var(--darker-yellow);
      transform: skewX(60deg) translateX(1.8rem);

      @media (max-width: 1024px) {
        top: 98%;
      }
      @media (max-width: 765px) {
        height: 1.2rem;
        transform: skewX(60deg) translateX(1rem);
      }
      @media (max-width: 595px) {
        top: 97%;
        height: 1rem;
        transform: skewX(60deg) translateX(0.8rem);
      }
    }
    ::after {
      content: "";
      position: absolute;
      width: 3.5rem;
      height: 98.5%;
      left: 100%;
      top: 0;
      background-color: var(--dark-yellow);
      transform: skewY(30deg) translateY(1rem);

      @media (max-width: 1024px) {
        height: 98%;
      }
      @media (max-width: 765px) {
        width: 2rem;
        transform: skewY(30deg) translateY(0.6rem);
      }
      @media (max-width: 595px) {
        height: 97%;
        width: 1.6rem;
        transform: skewY(30deg) translateY(0.5rem);
      }
    }
  }

  .tag {
    position: absolute;
    top: 10%;
    right: 20%;

    svg {
      width: 5rem;
      height: 5rem;
    }

    @media (max-width: 595px) {
      top: 5%;
      right: 10%;
    }
  }

  .profile {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: auto;
  }
`;

const Bgtext = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -6rem;
  word-wrap: break-word;
  z-index: -1;

  @media (max-width: 1440px) {
    bottom: -4.5rem;
  }

  @media (max-width: 1024px) {
    bottom: -3rem;
  }
  @media (max-width: 765px) {
    top: 5rem;
  }

  h1 {
    font-size: 22rem;
    line-height: 1;
    opacity: 0.4;
    margin: 0;
    padding: 0;
    color: black;
    user-select: none;

    @media (max-width: 1440px) {
      font-size: 18rem;
    }

    @media (max-width: 1280px) {
      font-size: 17rem;
    }

    @media (max-width: 1024px) {
      font-size: 13rem;
    }

    @media (max-width: 765px) {
      float: right;
    }

    ::before {
      content: "Con";
      position: absolute;
      left: 2rem;
      top: 0;
      color: pink;
    }
    ::after {
      content: "nect";
      position: absolute;
      left: 2rem;
      top: 50%;
      color: pink;
    }
  }
`;

const Socials = styled.div`
  margin-top: 0.5rem;
  width: 50%;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: white;
    margin-right: 1.5rem;
  }

  @media (min-width: 1980px) {
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;

const Div = styled.div`
  ${center}
  padding: 2rem 0;

  h2 {
    margin-bottom: 2rem;
    color: white;
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  p,
  h3 {
    font-family: NeueHaasDisplayMedium;
    color: white;
  }

  .code {
    font-size: 1.5rem;

    @media (min-width: 1980px) {
      font-size: 2rem;
    }
  }

  h3 {
    display: inline-block;
    transition: all 500ms;
    position: relative;
    margin-bottom: 2rem;
    cursor: pointer;

    :after {
      content: "";
      position: absolute;
      left: 0;
      z-index: -1;
      bottom: -0.3rem;
      height: 0.2rem;
      width: 100%;
      background-color: white;
      transform: scale(0);
      transform-origin: center;
      opacity: 1;
      transition: all 300ms;
    }

    :hover,
    :active {
      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

export default Contact;
