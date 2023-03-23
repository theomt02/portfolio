// TO DO:
//
// cute animation of cat cutting hole in wall then saying hi lol
//
//
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
          <Spanned height={-20} duration={0.3}></Spanned>
        </MainH1>

        <ContentWrapper>
          <Section>
            <UL variants={ULVariants} initial="hidden" animate="show">
              {/* <motion.li variants={listVariants}>
                <Link to="about">
                  <motion.h3 whileHover={whileLinkHover}>About</motion.h3>
                </Link>
              </motion.li> */}
              <motion.li variants={listVariants}>
                <Link to="projects">
                  <motion.h3 whileHover={whileLinkHover}>Projects</motion.h3>
                </Link>
              </motion.li>
              <motion.li variants={listVariants}>
                <Link to="photography">
                  <motion.h3 whileHover={whileLinkHover}>Photography</motion.h3>
                </Link>
              </motion.li>
              {/* <motion.li variants={listVariants}>
                <Link to="contact">
                  <motion.h3 whileHover={whileLinkHover}>Contact</motion.h3>
                </Link>
              </motion.li> */}
            </UL>
          </Section>
          {/* <TestCanvas /> */}
        </ContentWrapper>
      </Page>
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
    margin: none;
  }
  li {
    display: inline-block;
    h3 {
      font-size: 3vw;
      text-decoration: underline;
      cursor: pointer;
      @media ${device.laptopL} {
        font-size: 4vw;
      }
      @media ${device.laptop} {
        font-size: 5vw;
      }
      @media ${device.tablet} {
        font-size: 8vw;
      }
    }
  }
`;
const UL = styled(motion.ul)`
  width: 100%;
  list-style: square;
  /* margin: var(--space-small) 0 0 var(--space-xsmall); */
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const MainH1 = styled(motion.h1)`
  cursor: default;
  position: relative;
  font-size: 8vw;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media ${device.laptopL} {
    font-size: 8vw;
  }
  @media ${device.laptop} {
    font-size: 10vw;
  }
  @media ${device.tablet} {
    font-size: 15vw;
  }
  @media (max-width: 460px) {
    font-size: 13vw;
  }
`;
