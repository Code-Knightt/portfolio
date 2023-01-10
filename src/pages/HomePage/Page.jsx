import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ThingComp from "../../components/ThingComp";
import About from "./About";
import Hero from "./Hero";

import styled from "styled-components";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../../components/Footer";

function Page() {
  const thingRef = useRef(null);
  const topRef = useRef(null);

  function moveThing() {
    const value = thingRef.current?.getBoundingClientRect().y;
    const diff = initialPosition - value;

    if (diff > 0 && diff < 500) {
      thingRef.current.style.transform = `translate(${0 + diff}px,${
        0 + diff
      }px)`;
    }
  }

  let initialPosition;
  useEffect(() => {
    initialPosition = thingRef.current?.getBoundingClientRect().y;
  }, []);

  return (
    <App onScroll={moveThing}>
      <div ref={topRef} className="pseudo" />
      <Navbar />
      <Hero />
      <ThingComp ref={thingRef} />
      <About />
      <Projects />
      <Contact />
      <Footer topRef={topRef} />
    </App>
  );
}

const App = styled.div`
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  scroll-behavior: smooth;

  .pseudo {
    position: absolute;
    top: 0;
    left: 0;
    height: 1rem;
    width: 1rem;
  }
`;

export default Page;
