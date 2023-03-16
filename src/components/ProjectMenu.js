import React from "react";
// style
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Carousel } from "./Carousel";
import { device } from "../style/Defaults";
// Components
// import { projects } from "../data";

const ProjectMenu = () => {
  return (
    <PROJECT_MENU>
      <CAROUSEL_WINDOW>
        <Carousel />
        <span className="material-symbols-outlined cloud">cloud</span>
        <span className="material-symbols-outlined cloud c2">cloud</span>
      </CAROUSEL_WINDOW>
    </PROJECT_MENU>
  );
};

export default ProjectMenu;

const cloudAnimation = keyframes`
        0% {margin-left: 155%;}
	100% {margin-left: -10%;}
    `;
const cloudAnimation2 = keyframes`
        0% {margin-left: 105%;}
	100% {margin-left: -60%;}
    `;
const PROJECT_MENU = styled(motion.div)`
  text-shadow: none;
  font-size: 2rem;
  width: 45vw;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    width: 90%;
    height: 90vh;
  }
  @media ${device.laptop} {
    width: 70%;
    height: 80vh;
  }
  @media ${device.laptopL} {
    width: 100%;
    height: 60vh;
  }
`;
const CAROUSEL_WINDOW = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  background: #48a7cc;
  box-shadow: 0 0 0 10px ${({ theme }) => theme.text};
  @media ${device.tablet} {
    width: 90%;
    height: 90vh;
  }
  @media ${device.laptop} {
    width: 70%;
    height: 80vh;
  }
  @media ${device.laptopL} {
    width: 100%;
    height: 60vh;
  }
  /* Cloud */
  .cloud {
    position: absolute;
    color: white;
    font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 0, "opsz" 48;
    font-size: 4rem;
    animation-name: ${cloudAnimation};
    animation-duration: 22s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .c2 {
    margin-top: 5rem;
    margin-left: 10rem;
    animation-name: ${cloudAnimation2};
    animation-duration: 20s;
  }
`;
