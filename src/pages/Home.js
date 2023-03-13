import React, { useState, useEffect } from "react";
// Router
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
import { Page, ContentWrapper } from "../style/Defaults";
import { motion } from "framer-motion";
import { device } from "../style/Defaults";
// Components
import Overlay from "../components/Overlay";
import { useTheme } from "styled-components";
import { initialLoadTransition } from "../style/Theme";
import Spanned from "../components/Spanned";
// Three
// import TestCanvas from "../components/TestCanvas.js";

const Home = () => {
  const theme = useTheme();
  const [initialLoadDelay, setInitialLoadDelay] = useState(
    initialLoadTransition.delay
  );
  const [spannedIsVisible, setSpannedIsVisible] = useState(true);

  useEffect(() => {
    if (initialLoadDelay === initialLoadTransition.delay) {
      setTimeout(() => {
        setInitialLoadDelay(0);
      }, initialLoadTransition.delay * 1000);
    }
  }, [initialLoadDelay]);

  const mainH1Variants = {
    hidden: {
      color: theme.primary,
      textShadow: "0px 0px 0px #000",
    },
    visible: {
      color: theme.text,
      textShadow: "4px 4px 1px #ff0000",
      transition: {
        duration: initialLoadTransition.duration,
        delay: initialLoadDelay,
      },
    },
  };
  const whileLinkHover = {
    scale: 1.08,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  };

  const whileSpannedVisible = {
    scale: 1.14,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  };

  const listVariants = {
    hidden: { x: -200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const ULVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        duration: initialLoadTransition.duration,
        staggerChildren: 0.2,
      },
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
          <Spanned
            height={-20}
            duration={0.3}
            isVisible={spannedIsVisible}
          ></Spanned>
        </MainH1>

        <ContentWrapper>
          <Section>
            <UL variants={ULVariants} initial="hidden" animate="show">
              <motion.li variants={listVariants}>
                <Link to="about">
                  <motion.h3 whileHover={whileLinkHover}>About</motion.h3>
                </Link>
              </motion.li>
              <motion.li variants={listVariants}>
                <ProjectsLinkContainer
                  active={spannedIsVisible.toString()}
                  onClick={() => setSpannedIsVisible(!spannedIsVisible)}
                  initial={{ scale: 1 }}
                  animate={spannedIsVisible ? { scale: 1 } : { scale: 1.12 }}
                  whileHover={
                    spannedIsVisible ? whileLinkHover : whileSpannedVisible
                  }
                >
                  <ProjectsLink>Projects</ProjectsLink>
                  {spannedIsVisible ? null : <LINK_BACKGROUND />}
                </ProjectsLinkContainer>
              </motion.li>
              <motion.li variants={listVariants}>
                <Link to="photography">
                  <motion.h3 whileHover={whileLinkHover}>Photography</motion.h3>
                </Link>
              </motion.li>
              <motion.li variants={listVariants}>
                <Link to="contact">
                  <motion.h3 whileHover={whileLinkHover}>Contact</motion.h3>
                </Link>
              </motion.li>
            </UL>
          </Section>
          {/* <TestCanvas /> */}
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
    h3 {
      font-size: 2.2rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const UL = styled(motion.ul)`
  width: 100%;
  list-style: square;
  margin: var(--space-small) 0 0 var(--space-xsmall);
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const MainH1 = styled(motion.h1)`
  cursor: default;
  position: relative;
  font-size: 8rem;
  z-index: 2;
  @media ${device.laptopL} {
    font-size: 7vw;
  }
  @media ${device.tablet} {
    font-size: 15vw;
    width: 100%;
  }
`;
const SPACE = styled.div`
  height: 100vh;
`;
const ProjectsLink = styled(motion.h3)`
  position: relative;
  z-index: 2;
`;
const LINK_BACKGROUND = styled(motion.span)`
  position: absolute;
  top: -12.5%;
  left: -25%;
  width: 150%;
  height: 130%;
  border-radius: 15px;
  background: red;
  z-index: 0;
  display: block;
`;

const ProjectsLinkContainer = styled(motion.div)`
  position: relative;
`;
