import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Style
import styled from "styled-components";
import { themes } from "../style/Theme";
import "../style/DarkMode.scss";
import { motion, AnimatePresence } from "framer-motion";
// Components
import Clock from "react-live-clock";
import { device } from "../style/Defaults";
// FA
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  setCurrentTheme,
  currentTheme,
  setCurrentDate,
  setHeaderVisible,
  headerVisible,
  loadedTheme,
  setLoadedTheme,
  counter,
  setCounter,
}) => {
  const [showBubble, setShowBubble] = useState(false);
  const navigate = useLocation();

  // speech bubble under theme change
  useEffect(() => {
    setTimeout(handleShowBubble, 4000);
    // eslint-disable-next-line
  }, []);

  const handleShowBubble = () => {
    setShowBubble(true);
    setTimeout(handleHideBubble, 5000);
  };
  const handleHideBubble = () => {
    setShowBubble(false);
  };

  const handleDarkMode = () => {
    if (currentTheme.name === "light") {
      setCurrentTheme({ name: "dark", color: loadedTheme.dark });
    } else {
      setCurrentTheme({ name: "light", color: loadedTheme.light });
    }
  };

  const handleThemeChange = () => {
    console.log("theme changed");
    setCounter(counter + 1);
    setLoadedTheme(themes[counter].theme);
  };

  const dateFormat = (date) => {
    const d = new Date(date);
    let m = d.getMinutes();
    if (m < 10) {
      m = `0${m}`;
    }
    let h = d.getHours();
    let dF = `${h}:${m}`;
    let day = d.getDay();

    setCurrentDate({ tf: dF, day: day, m: m });
    // else if (!currentDate.m === m) {
    //   setCurrentDate({ tf: dF, day: day, m: m });
    // }
  };

  const headerVariants = {
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.3,
        delay: 1.5,
        staggerChildren: 0.05,
        delayChildren: 1.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const flexVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const toggleVisible = () => {
    if (navigate.pathname !== "/") {
      setHeaderVisible(false);
    }
  };

  return (
    <>
      {headerVisible && (
        <HEADER variants={headerVariants} animate="show" initial="hidden">
          <FLEX variants={flexVariants}>
            <SMALL_DESKTOP>
              <Clock
                format="ddd HH:mm"
                timezone={"Pacific/Auckland"}
                ticking={true}
                filter={(date) => `${date}, Wellington`}
                onChange={(date) => {
                  dateFormat(date);
                }}
              />
            </SMALL_DESKTOP>
            <SMALL_MOBILE>
              <Clock
                format="ddd HH:mm"
                timezone={"Pacific/Auckland"}
                ticking={true}
                onChange={(date) => {
                  dateFormat(date);
                }}
              />
            </SMALL_MOBILE>
          </FLEX>
          <LOGO variants={flexVariants} onClick={toggleVisible}>
            <LinkNoUL to="/">
              <h1>TMT</h1>
            </LinkNoUL>
          </LOGO>
          <TOGGLE_CONTAINER variants={flexVariants}>
            <ThemeToggle onClick={handleThemeChange}>
              <FontAwesomeIcon icon={faCircle} size="2xl" />
              <AnimatePresence>
                {showBubble && (
                  <SPEECH_BUBBLE
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    theme change for chromophobes
                  </SPEECH_BUBBLE>
                )}
              </AnimatePresence>
            </ThemeToggle>
            <LightToggle
              onClick={handleDarkMode}
              id="toggle"
              className="toggle"
              type="checkbox"
            ></LightToggle>
          </TOGGLE_CONTAINER>
        </HEADER>
      )}
    </>
  );
};

export default Header;

const FLEX = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* width: 20vw; */
`;
const LOGO = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5vw;
  @media ${device.laptopL} {
    font-size: 2vmax;
  }
`;
const HEADER = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${({ theme }) => theme.primary};
  transition: background 500ms;
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 24vw;
  margin: 0;
  height: 10vh;
  time {
    font-size: 1.4vw;
    @media ${device.laptopL} {
      font-size: 1.5vmax;
    }
    @media ${device.laptop} {
      font-size: 1.7vmax;
    }
  }
  @media ${device.tablet} {
    padding: 2vh 2vh;
  }
`;

const TOGGLE_CONTAINER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LightToggle = styled.input`
  display: flex;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  background-position-x: 4px;
  background-position-y: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-1turn);
  outline: none;
`;
const ThemeToggle = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.identity};
  position: relative;
`;
const SPEECH_BUBBLE = styled(motion.p)`
  cursor: auto;
  pointer-events: none;
  // layout
  position: absolute;
  max-width: 30rem;
  left: -60%;
  top: 150%;
  // looks
  background-color: ${({ theme }) => theme.text};
  padding: 1.125rem 1.5rem;
  font-size: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.primary};
  /* noselect */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  ::before {
    color: ${({ theme }) => theme.primary};
    // layout
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    border-bottom-color: ${({ theme }) => theme.text};
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

const LinkNoUL = styled(Link)`
  text-decoration: none;
  :hover {
    color: transparent;
    text-shadow: 0 0 5px ${({ theme }) => theme.textShadow};
  }
  transition: all 0.2s ease;
`;
const SMALL_DESKTOP = styled.small`
  display: none;
  @media ${device.laptop_min} {
    display: flex;
  }
`;
const SMALL_MOBILE = styled.small`
  display: none;
  @media ${device.laptop} {
    padding: 2vh 2vh;
    height: auto;
    display: flex;
  }
`;
