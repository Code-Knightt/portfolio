import React from "react";
import styled from "styled-components";
import { center } from "../../mixins";
import { motion } from "framer-motion";

function Hero() {
  return (
    <Div id="top">
      <h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hey,
        </motion.span>{" "}
        <br />
        <motion.span
          animate={{ opacity: [0, 1, 1], scale: [0.5, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          I'm Bhagya
        </motion.span>
      </h1>
      <h3>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Your friendly neighborhood <br />
          <span className="line">superhero</span> <mark>programmer</mark>.
        </motion.span>
      </h3>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  ${center}
  height: 65vh;
  padding: 3rem 0;
  position: relative;

  @media (min-width: 1980px) {
    height: 80vh;
  }

  .line {
    text-decoration: line-through;
  }

  span {
    display: inline-block;
  }

  mark {
    background-color: var(--green);
    transform: rotate(15deg);
  }

  h1 {
    @media (max-width: 595px) {
      transform: translateY(5rem);
    }
  }
  h3 {
    @media (max-width: 595px) {
      transform: translateY(12rem);
      max-width: 80%;
    }
  }
`;

export default Hero;
