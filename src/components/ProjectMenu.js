import React from "react";
// style
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
// Components
// import { projects } from "../data";

const ProjectMenu = () => {
  return (
    <PROJECT_MENU>
      <CAROUSEL_WINDOW carousel="carousel">
        <Carousel />
        <span className="material-symbols-outlined cloud">cloud</span>
        <span className="material-symbols-outlined cloud c2">cloud</span>
      </CAROUSEL_WINDOW>
    </PROJECT_MENU>
  );
};

export default ProjectMenu;

const cloudAnimation = keyframes`
        0% {margin-left: 31vw;}
	100% {margin-left: -5vw;}
    `;
const cloudAnimation2 = keyframes`
        0% {margin-left: 41vw;}
	100% {margin-left: -5vw;}
    `;
const PROJECT_MENU = styled(motion.div)`
  text-shadow: none;
  font-size: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CAROUSEL_WINDOW = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 30vw;
  height: 25vw;
  background: #48a7cc;
  box-shadow: 0 0 0 10px #301e06;
  /* Cloud */
  .cloud {
    position: absolute;
    color: white;
    font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48;
    font-size: 4rem;
    animation-name: ${cloudAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .c2 {
    margin-top: 5rem;
    margin-left: 10rem;
    animation-name: ${cloudAnimation2};
    animation-duration: 26s;
  }
`;

// const LIST = styled(motion.ul)`
//   display: flex;
//   list-style: none;
//   width: 100%;
//   justify-content: space-evenly;
//   align-items: center;
//   height: 100%;
// `;
// const LIST_ITEM = styled(motion.li)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   img {
//     max-height: 40vh;
//   }
// `;
// const PROJECT_BUTTON = styled(motion.div)`
//   padding: 1rem;
//   border-radius: 0.5rem;
//   background: ${({ theme }) => theme.text};
//   color: ${({ theme }) => theme.primary};
// `;
