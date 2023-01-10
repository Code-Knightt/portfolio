import React from "react";
import styled from "styled-components";
import { center } from "../../mixins";
import Skill from "../../components/Skill";

function About() {
  return (
    <Background id="about">
      <Div>
        <h2>
          <span className="title">About Me.</span> A student by day and a coder
          by night astounded by the world of development and machine learning.
        </h2>

        <p className="text">
          I am currently exploring new technologies to pursue still learning
          about different domains to choose a career in. I aspire to learn and
          innovate and have a dream of contributing something useful to society.
          I go by{" "}
          <a
            href="https://github.com/Code-Knightt"
            target="_blank"
            rel="noreferrer"
          >
            Code-Knightt
          </a>{" "}
          on github and before you ask I even don't know why the username.
        </p>
        <h2 className="title">Skills.</h2>
        <Skills>
          <Skill
            skill="Javascript"
            percent="90"
            description={
              "Comfortable with the DOM, MERN stack, NodeJS and any JS library with good documentation."
            }
          />
          <Skill
            skill="ReactJS"
            percent="80"
            description={
              "Proficient in building SPAs and can also use React-Router and React-Redux. Currently practising NextJS."
            }
          />
          <Skill
            skill="AWS"
            percent="50"
            description={
              "Familiar with the basics of AWS and can integrate services like EC2, S3, Lambda functions into web applications."
            }
          />
          <Skill
            skill="Golang"
            percent="40"
            description={"Can build REST APIs in Golang."}
          />
          <Skill
            skill="ML with Python"
            percent="60"
            description={
              "Have worked with libraries like Pandas, Numpy, Scikit-Learn, Tensorflow and can build regression and classification models as well as basic neural networks."
            }
          />
          <Skill
            skill="Problem Solving"
            percent="50"
            description={"Able to tackle problems (Atleast some of them)."}
          />
          <Skill
            skill="Googling"
            percent="100"
            description={"Ofcourse the most important ability."}
          />
        </Skills>
      </Div>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  background-color: var(--blue);
  min-height: 70vh;
  position: relative;
  padding: 3rem 0;
  overflow: hidden;
  background-image: radial-gradient(var(--yellow) 1px, transparent 1px);
  background-size: 3rem 3rem;
  animation: move 60s infinite linear;

  @media (max-width: 595px) {
    animation: move-mobile 80s infinite linear;
  }

  @keyframes move {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -100% 100%;
    }
  }

  @keyframes move-mobile {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -500% 100%;
    }
  }
`;

const Div = styled.div`
  ${center}
  padding: 2rem 0;
  z-index: 10;

  h1 {
    color: white;
  }

  h2 {
    max-width: 80%;

    @media (max-width: 595px) {
      max-width: 90%;
    }
  }

  .text {
    max-width: 90%;
    line-height: 1.5;
    margin: 5rem 0;

    a {
      color: var(--green);
    }
  }

  .title {
    user-select: none;
    color: var(--green);
    margin: 0;
    text-align: justify;
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export default About;
