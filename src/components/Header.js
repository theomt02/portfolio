import React from "react";
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
import { light, dark } from "../style/Theme";
import "../style/DarkMode.scss";
import { motion } from "framer-motion";
// Components
import Clock from "react-live-clock";
import { device } from "../style/Defaults";

const Header = ({
  setCurrentTheme,
  currentTheme,
  setCurrentDate,
  currentDate,
}) => {
  const handleDarkMode = () => {
    if (currentTheme.name === "light") {
      setCurrentTheme({ name: "dark", color: dark });
    } else {
      setCurrentTheme({ name: "light", color: light });
    }
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
      transition: {
        ease: "easeIn",
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 1.5,
      },
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

  return (
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
      <LOGO variants={flexVariants}>
        <LinkNoUL to="/">
          <h1>TMT</h1>
        </LinkNoUL>
      </LOGO>
      <FLEX variants={flexVariants}>
        <ThemeToggle
          onClick={handleDarkMode}
          id="toggle"
          className="toggle"
          type="checkbox"
        ></ThemeToggle>
      </FLEX>
    </HEADER>
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
`;
const HEADER = styled(motion.header)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 24vw;
  margin: 0 0;
  @media ${device.tablet} {
    padding: 2vh 2vh;
  }
`;

const ThemeToggle = styled.input`
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
const LinkNoUL = styled(Link)`
  text-decoration: none;
  :hover {
    color: transparent;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  transition: all 0.2s ease;
`;
const SMALL_DESKTOP = styled.small`
  display: none;
  @media ${device.tablet_min} {
    display: flex;
  }
`;
const SMALL_MOBILE = styled.small`
  display: none;
  @media ${device.tablet} {
    padding: 2vh 2vh;
    height: auto;
    display: flex;
  }
`;
