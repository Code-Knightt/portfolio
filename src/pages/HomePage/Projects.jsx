import React from "react";
import styled from "styled-components";
import Project from "../../components/Project";
import { center } from "../../mixins";

function Projects() {
  return (
    <Background id="projects">
      <Div>
        <h2 className="title">Projects.</h2>
        <p className="subtitle">
          Take a look at some of the <mark>stuff</mark> I created.
        </p>
        <Showcase>
          <Project
            name={"Gradkit"}
            image={"gradkit_home.png"}
            technologies={["ReactJS", "NodeJS", "MongoDB", "AWS"]}
            description={
              "Gradkit is a site aimed at selling educational video courses at a minimal price. I prepared the Database design, prepared server api routes, partly did payment integration and also overlooked AWS services like EC2 and S3 for deployment and storage."
            }
            link={"https://gradkit.in"}
            github={"https://github.com/dev-jb-007/gradkit/tree/master"}
          />
          <Project
            name={"Icon Venture Company"}
            image={"ivc_home.png"}
            technologies={["ReactJS", "Firebase"]}
            description={
              "IVC is a Surat based designing company. I was given the oppurtunity to develop the company's website. I tailored the website according to their design needs and also integrated firebase and discord webhooks for form handling."
            }
            link={"https://iconventurecompany.com"}
          />
          <Project
            name={"Portfolio Site"}
            image={"portfolio_home.png"}
            technologies={["ReactJS"]}
            description={
              "Built with ReactJS and used libraries like styled-components for styling and framer-motion for animations."
            }
            github={"https://github.com/Code-Knightt/portfolio"}
          />
        </Showcase>
      </Div>
    </Background>
  );
}

const Background = styled.div`
  width: 100%;
  min-height: 70vh;
  z-index: 1;
  position: relative;
  padding: 3rem 0;
`;

const Div = styled.div`
  ${center}
  padding: 2rem 0;

  .title {
    color: var(--red);
    margin-bottom: 2rem;
    user-select: none;
  }

  .subtitle {
    color: black;
    margin-bottom: 2rem;
    word-spacing: 0.3rem;

    @media (min-width: 1980px) {
      margin-bottom: 4rem;
    }
    @media (max-width: 595px) {
      margin-bottom: 3rem;
    }
  }

  mark {
    background-color: var(--green);
    transform: rotate(15deg);
  }
`;

const Showcase = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 70%;
    grid-row-gap: 5rem;
  }
  @media (max-width: 795px) {
    grid-template-columns: 90%;
  }
  @media (max-width: 595px) {
    grid-template-columns: 95%;
  }
`;

export default Projects;
