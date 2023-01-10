import React, { useRef } from "react";
import styled from "styled-components";

const ThingComp = React.forwardRef((props, ref) => {
  return <Thing ref={ref}></Thing>;
});

const Thing = styled.div`
  height: 20rem;
  width: 20rem;
  background-color: var(--yellow);
  position: absolute;
  right: 35%;
  top: 30vh;
  z-index: 2;
  pointer-events: none;
  transition: all 200ms ease-out;

  @media (max-width: 1290px) {
    height: 18rem;
    width: 18rem;
    right: 25%;
  }

  @media (max-width: 765px) {
    height: 15rem;
    width: 15rem;
    right: 20%;
    top: 35vh;
  }

  @media (max-width: 595px) {
    height: 12rem;
    width: 12rem;
    top: 36vh;
    right: 23%;
  }

  @media (min-width: 1660px) {
    height: 25rem;
    width: 25rem;
    right: 30%;
  }
  @media (min-width: 1980px) {
    height: 30rem;
    width: 30rem;
    right: 27%;
  }

  ::after {
    content: "";
    width: 300%;
    height: 100%;
    position: absolute;
    left: 100%;
    background-color: var(--red);
    transform: skewY(40deg) translateY(126%);
    z-index: -1;
  }

  ::before {
    content: "";
    width: 100%;
    height: 250%;
    background-color: var(--dark-red);
    position: absolute;
    top: 100%;
    left: 0;
    transform: skewX(50deg) translateX(149%);
    z-index: -1;
  }
`;

export default ThingComp;
