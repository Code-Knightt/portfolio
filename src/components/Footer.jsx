import React from "react";
import styled from "styled-components";
import { center } from "../mixins";

const Footer = React.forwardRef((topRef, props) => {
  return (
    <Container>
      <Div>
        <p>
          Website design inspired from{" "}
          <a href="https://okalpha.co" target="_blank" rel="noreferrer">
            okalpha
          </a>{" "}
          <br />
          Made with love using React
        </p>
        <p
          className="arrow"
          onClick={() => {
            topRef.topRef?.current?.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          }}
        >
          &uarr;
        </p>
      </Div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Div = styled.div`
  ${center}
  position: relative;

  p {
    color: black;
    font-size: 1rem;
    word-spacing: normal;
  }

  a,
  a:visited {
    color: var(--green);
  }

  .arrow {
    position: absolute;
    right: 0;
    top: 20%;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: 1660px) {
    p {
      font-size: 1.3rem;
    }

    .arrow {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 1980px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export default Footer;
