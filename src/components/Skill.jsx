import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as SVGArrow } from "../assets/arrow_half.svg";

function Skill({ skill, percent, description }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [inView]);

  return (
    <SkillDiv
      setDescHeight={showDescription ? "300px" : 0}
      setAngle={showDescription ? "90deg" : "0deg"}
    >
      <div
        className="title"
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        <p>
          {skill + " "}
          <SVGArrow className="arrow" />
        </p>
        <p className="description" ref={descriptionRef}>
          {description}
        </p>
      </div>

      <ProgressBar className="progressbar" ref={ref}>
        <motion.div animate={controls} className="progress" />
      </ProgressBar>
    </SkillDiv>
  );
}

const SkillDiv = styled.div`
  display: grid;
  grid-template-columns: 35% 60%;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;

  div {
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 595px) {
    grid-template-columns: 100%;
  }

  .title {
    cursor: pointer;

    .description {
      font-size: 1.1rem;
      overflow: hidden;
      transition: all 500ms;
      max-height: 0;
      max-height: ${(props) => props.setDescHeight};
      transition: max-height 500ms ease-in-out;
      text-align: justify;

      @media (max-width: 595px) {
        margin-bottom: 0.5rem;
      }
    }

    .visible {
      max-height: 100%;
    }
  }

  .arrow {
    max-height: 1.5rem;
    max-width: 1.5rem;
    transform: rotate(${(props) => props.setAngle}) translateY(15%);
    transition: all 500ms ease-in-out;
    transform-origin: 50% 65%;

    #rectangle {
      fill: white;
    }
  }
`;

const ProgressBar = styled.div`
  border-radius: 1rem;
  background-color: white;
  width: 100%;
  height: 1rem;
  position: relative;
  z-index: 2;

  @media (max-width: 595px) {
    margin-bottom: 1rem;
  }

  .progress {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: var(--green);
    border-radius: inherit;
    z-index: 1;
  }
`;

export default Skill;
