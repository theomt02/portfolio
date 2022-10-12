import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { initialLoadTransition } from "../style/Theme";

const Overlay = () => {
  const overlayAnimate = {
    y: "-105vh",
  };
  return (
    <OVERLAY
      animate={overlayAnimate}
      transition={initialLoadTransition}
      exit={{ y: "105vh" }}
    >
      <span></span>
    </OVERLAY>
  );
};

export default Overlay;

const OVERLAY = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${(props) => props.theme.text};
`;
