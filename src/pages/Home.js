import React, { useEffect } from "react";
// Router
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
import { Page, ContentWrapper } from "../style/Defaults";
import { motion, useScroll } from "framer-motion";
// Components
import Overlay from "../components/Overlay";
import { useTheme } from "styled-components";
import { initialLoadTransition } from "../style/Theme";
import Spanned from "../components/Spanned";

const Home = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();

  const mainH1Variants = {
    hidden: {
      color: theme.primary,
      textShadow: "0px 0px 0px #000",
    },
    visible: {
      color: theme.text,
      transition: initialLoadTransition,
      textShadow: "4px 4px 1px #ff0000",
    },
  };
  return (
    <>
      <Page>
        <Overlay />
        <MainH1
          layout
          initial="hidden"
          animate="visible"
          variants={mainH1Variants}
        >
          <Spanned height={-20} duration={0.3}></Spanned>
        </MainH1>

        <ContentWrapper>
          <Section>
            <UL>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="photography">Photography</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </UL>
          </Section>
        </ContentWrapper>
      </Page>
      <SPACE />
    </>
  );
};

export default Home;

const Section = styled.section`
  width: 100%;
  margin-bottom: var(--space-large);
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  li {
    display: inline-block;
    a {
      font-size: 2rem;
    }
  }
`;
const UL = styled.ul`
  width: 100%;
  list-style: square;
  margin: var(--space-small) 0 0 var(--space-xsmall);
`;

const MainH1 = styled(motion.h1)`
  position: relative;
  font-size: 8rem;
  z-index: 2;
`;
const SPACE = styled.div`
  height: 100vh;
`;
