import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { projects as images } from "../data";
import styled from "styled-components";
import { device } from "../style/Defaults";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <IMG
          onClick={() => window.open(images[imageIndex].url, "_blank")}
          key={page}
          src={images[imageIndex].icon}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          whileHover={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <NEXT_CONTAINER>
        <MOBILE_NEXT onClick={() => paginate(1)} />
        <NEXT onClick={() => paginate(1)}>{"‣"}</NEXT>
      </NEXT_CONTAINER>
      <PREV_CONTAINER>
        <MOBILE_PREV onClick={() => paginate(-1)} />
        <PREV onClick={() => paginate(-1)}>{"‣"}</PREV>
      </PREV_CONTAINER>
    </>
  );
};

const NEXT_CONTAINER = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 15%;
  @media ${device.tablet} {
    cursor: pointer;
  }
`;
const PREV_CONTAINER = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 15%;
  cursor: pointer;
  @media ${device.tablet} {
    cursor: pointer;
  }
`;

const NEXT = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: #e2e2e2;
  color: #131313;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  z-index: 2;
  right: 50%;
  transform: translateX(50%);
`;
const PREV = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: #e2e2e2;
  color: #131313;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%) scale(-1);
`;

const MOBILE_NEXT = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
const MOBILE_PREV = styled.div`
  position: absolute;
  left: 0;
  background-color: white;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

const IMG = styled(motion.img)`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50%;
  cursor: pointer;
`;
