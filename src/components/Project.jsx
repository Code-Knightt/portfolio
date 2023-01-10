import React from "react";
import styled from "styled-components";

function Project({ name, technologies, description, image, link, github }) {
  return (
    <Container>
      <div className="background" />
      <div>
        <p className="project_title">{name}</p>
        <div className="image_container">
          {image && <img src={image} alt={name} className="background" />}
        </div>
        <div className="tech_container">
          {technologies?.map((tech, index) => {
            return (
              <p key={tech + index} className="tech">
                {tech}
              </p>
            );
          })}
        </div>
      </div>
      <div>
        {description && <p className="desc">{description}</p>}
        <div className="links">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="link">
              Link
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="link">
              Github
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  min-height: 15rem;
  width: 100%;
  position: relative;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 60% 40%;
  }

  @media (max-width: 595px) {
    grid-template-columns: 100%;
    transform: translateX(-2%);
  }

  @media (min-width: 1980px) {
    padding: 2rem 0;
  }

  transition: all 500ms;
  box-shadow: 3rem 3rem 6rem gray;

  :hover {
    transform: translate(-0.5rem, -0.2rem);
    box-shadow: 3.5rem 3.2em 8rem -2rem gray;
  }

  p {
    color: black;
    font-family: NeueHaasDisplayMedium;
    word-spacing: normal;
  }

  .background {
    background-color: var(--yellow);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1.2rem;
      left: 0;
      top: 100%;
      background-color: var(--darker-yellow);
      transform: skewX(60deg) translateX(1rem);
    }
    ::after {
      content: "";
      position: absolute;
      width: 2rem;
      height: 100%;
      left: 100%;
      top: 0;
      background-color: var(--dark-yellow);
      transform: skewY(30deg) translateY(0.6rem);
    }
  }

  .project_title {
    width: 90%;
    margin: 0 auto;
  }

  .image_container {
    width: 90%;
    height: 12rem;
    position: relative;
    margin: 1rem auto;
    margin-bottom: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0% 0%;
    }

    @media (min-width: 1980px) {
      height: 15rem;
    }
  }

  .tech_container {
    width: 90%;
    margin: 0.5rem auto 0;

    @media (min-width: 1980px) {
      margin-top: 2rem;

      p {
        font-size: 1.4rem;
      }
    }
  }

  .tech {
    font-family: NeueHaasDisplay;
    display: inline;
    font-size: 1rem;
    margin-right: 0.5rem;
    transition: all 200ms;
    user-select: none;
    color: var(--blue);
    cursor: default;

    :hover {
      color: var(--red);
    }

    @media (min-width: 1980px) {
      margin-right: 1rem;
    }
  }

  .desc {
    width: 90%;
    margin: 0.5rem auto 0;
    font-size: 1rem;
    font-family: NeueHaasDisplay;
    user-select: none;

    @media (max-width: 1024px) {
      margin-top: 2rem;
    }
    @media (max-width: 595px) {
      margin-top: 0rem;
    }

    @media (min-width: 1980px) {
      margin-top: 1rem;
      font-size: 1.4rem;
    }
  }

  .links {
    width: 90%;
    margin: 0.5rem auto 0;

    @media (min-width: 1980px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }

  .link {
    color: var(--dark-red);
    font-family: NeueHaasDisplayMedium;
    word-spacing: normal;
    position: relative;
    z-index: 2;
    margin-right: 0.5rem;
  }
`;

export default Project;
