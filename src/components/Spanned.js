import React from "react";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";

const Spanned = ({ height, duration }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration, delay: 0 },
        }}
      >
        T
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        H
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        E
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        O
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        D
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        O
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        R
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        E
      </SPAN>
      <br />
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        M
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        A
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        R
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        T
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        E
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        L
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        L
      </SPAN>
      <br />
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        T
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        U
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        R
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        N
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        E
      </SPAN>
      <SPAN
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        whileHover={{
          y: height,
          transition: { type: "spring", duration: duration },
        }}
      >
        R
      </SPAN>
    </>
  );
};

export default Spanned;

const SPAN = styled(motion.span)`
  display: inline-block;
`;
