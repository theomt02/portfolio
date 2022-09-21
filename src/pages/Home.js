import React, { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
// Hooks

const Home = ({ date }) => {
  return (
    <HomeS>
      <h1>Hi, I'm Theo</h1>
      {/* ADD DIFFERENT THINGS DEPENDING ON TIME IN NZ */}
      <ContentWrapper>
        <Section>
          <UL>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="coffee">Coffee</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </UL>
        </Section>
      </ContentWrapper>
    </HomeS>
  );
};

export default Home;

const HomeS = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vw 24vw 6vw;
  flex: 1 1;
  flex-direction: column;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 5vw;
  align-items: flex-start;
  width: 100%;
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: var(--space-large);
`;
const UL = styled.ul`
  width: 100%;
  list-style: square;
  margin: var(--space-small) 0 0 var(--space-xsmall);
`;
