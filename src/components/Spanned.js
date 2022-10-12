import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import ProjectMenu from "./ProjectMenu";

const Spanned = ({ height, isVisible }) => {
  const bounceTransition = {
    y: {
      duration: 0.2,
      repeatType: "reverse",
      repeat: Infinity,
      ease: "easeOut",
      delay: 0,
    },
  };

  return (
    <COVER
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, ease: "easeOut" },
      }}
    >
      <AnimatePresence mode="wait">
        {isVisible ? (
          <SpannedContainer
            exit={{
              transition: {
                staggerChildren: 1,
              },
            }}
            key="spanned-container"
          >
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0 } }}
            >
              T
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.05 } }}
            >
              H
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.1 } }}
            >
              E
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.15 } }}
            >
              O
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.2 } }}
            >
              D
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.25 } }}
            >
              O
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.3 } }}
            >
              R
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.35 } }}
            >
              E
            </SPAN>
            <br />
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0 } }}
            >
              M
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.05 } }}
            >
              A
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.1 } }}
            >
              R
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.15 } }}
            >
              T
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.2 } }}
            >
              E
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.25 } }}
            >
              L
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.3 } }}
            >
              L
            </SPAN>
            <br />
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0 } }}
            >
              T
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.05 } }}
            >
              U
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.1 } }}
            >
              R
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.15 } }}
            >
              N
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.2 } }}
            >
              E
            </SPAN>
            <SPAN
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: height,
                transition: bounceTransition,
              }}
              exit={{ x: "-100vw", transition: { delay: 0.25 } }}
            >
              R
            </SPAN>
          </SpannedContainer>
        ) : (
          <ProjectMenuContainer
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            key="spanned-container2"
            exit={{ x: "100vw" }}
          >
            <ProjectMenu />
          </ProjectMenuContainer>
        )}
      </AnimatePresence>
    </COVER>
  );
};

export default Spanned;

const COVER = styled(motion.div)`
  height: 50vh;
`;

const SPAN = styled(motion.span)`
  display: inline-block;
`;
const SpannedContainer = styled(motion.div)`
  /* height: 50vh; */
`;
const ProjectMenuContainer = styled(motion.div)`
  width: 52vw;
  height: 50vh;
`;
