import React from "react";
import styled from "styled-components";
import { center } from "../mixins";
// import { Link } from "react-router";

function Navigate(e) {
  e.preventDefault();
  const link = e.target.attributes.href.value;

  const dest = document.getElementById(link);
  if (dest) {
    dest.scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

function Navbar() {
  return (
    <Body>
      <Item className="active" href="top" onClick={Navigate}>
        Home
      </Item>
      <Item href="about" onClick={Navigate}>
        About
      </Item>
      <Item href="projects" onClick={Navigate}>
        Projects
      </Item>
      <Item href="contact" onClick={Navigate}>
        Connect
      </Item>
    </Body>
  );
}

const Body = styled.div`
  ${center}

  height: 7rem;
  border-bottom: black solid 4.5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .active {
    color: var(--blue);
  }
`;

const Item = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: NeueHaasDisplayMedium;
  color: #000;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 300ms;

  :hover {
    color: var(--blue);
    opacity: 80%;
  }

  @media (min-width: 1980px) {
    font-size: 2rem;
  }

  @media (max-width: 765px) {
    font-size: 1rem;
  }
  @media (max-width: 595px) {
    font-size: 0.8rem;
  }
`;

export default Navbar;
