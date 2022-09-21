import React from "react";
import styled from "styled-components";
import { light, dark } from "../style/Theme";
// Components
// import Clock from "../components/Clock";
import Clock from "react-live-clock";
import "../style/DarkMode.scss";
import { Link } from "react-router-dom";

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

  return (
    <HEADER>
      <FLEX>
        <small>
          <Clock
            format="ddd HH:mm"
            timezone={"Pacific/Auckland"}
            ticking={true}
            filter={(date) => `${date}, Wellington`}
            onChange={(date) => {
              dateFormat(date);
            }}
          />
        </small>
      </FLEX>
      <FLEX>
        <LinkNoUL to="/">
          <h1>TMT</h1>
        </LinkNoUL>
      </FLEX>
      <FLEX>
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

const FLEX = styled.div`
  display: flex;
`;
const HEADER = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 24vw;
  margin: 0 0;
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
